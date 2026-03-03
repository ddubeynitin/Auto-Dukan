import axios from "axios";

const DEFAULT_PRICES = { petrol: 94.72, diesel: 87.62 };

const toNumber = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
};

const normalizeName = (value) =>
  (value || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const CITY_ALIASES = {
  bangalore: "bengaluru",
  bombay: "mumbai",
  calcutta: "kolkata",
  gurgaon: "gurugram",
  trivandrum: "thiruvananthapuram",
  baroda: "vadodara",
  pondicherry: "puducherry",
};

const normalizeCity = (city) => {
  const normalized = normalizeName(city);
  return CITY_ALIASES[normalized] || normalized;
};

const fetchFuelByCity = async ({ fuelType, baseUrl, apiKey, rapidApiHost, city }) => {
  const endpoint = new URL("/live_fuel_price", baseUrl).toString();
  const headers = {
    Accept: "application/json",
  };

  if (apiKey) {
    headers["X-Api-Key"] = apiKey;
  }

  if (rapidApiHost) {
    headers["X-RapidAPI-Host"] = rapidApiHost;
  }

  const response = await axios.get(endpoint, {
    params: {
      fuel_type: fuelType,
      location_type: "city",
    },
    headers,
  });

  const payload = response.data;
  const rows = Array.isArray(payload) ? payload : payload?.data;
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error(`Fuel API ${fuelType} response does not contain city rows`);
  }

  const targetCity = normalizeCity(city || "");
  const matched =
    rows.find((item) => normalizeCity(item?.city) === targetCity) ||
    rows.find((item) => normalizeCity(item?.city).includes(targetCity)) ||
    rows.find((item) => targetCity.includes(normalizeCity(item?.city)));

  const selectedRow = matched || rows[0];
  const parsedPrice = toNumber(selectedRow?.price);
  if (parsedPrice === null) {
    throw new Error(`Fuel API ${fuelType} response contains non-numeric price`);
  }

  return parsedPrice;
};

export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported."));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 300000,
    });
  });

export const reverseGeocode = async (lat, lon) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;
  const response = await fetch(url, {
    headers: {
      "Accept-Language": "en",
    },
  });

  if (!response.ok) {
    throw new Error("Failed reverse geocoding.");
  }

  const data = await response.json();
  const address = data?.address || {};
  const city =
    address.city ||
    address.town ||
    address.village ||
    address.county ||
    address.state_district ||
    "Your Area";

  return {
    city,
    state: address.state || "",
    country: address.country || "",
    displayLabel: `${city}${address.state ? `, ${address.state}` : ""}`,
  };
};

export const getFuelPricesByLocation = async ({ city }) => {
  const baseUrl =
    import.meta.env.VITE_FUEL_API_BASE_URL ||
    import.meta.env.VITE_RAPIDAPI_FUEL_URL ||
    import.meta.env.VITE_FUEL_PRICE_API_URL;
  const apiKey =
    import.meta.env.VITE_FUEL_API_KEY || import.meta.env.VITE_RAPIDAPI_KEY || import.meta.env.VITE_FUEL_PRICE_API_KEY;
  const rapidApiHost = import.meta.env.VITE_RAPIDAPI_HOST;

  if (baseUrl) {
    try {
      const [petrolPrice, dieselPrice] = await Promise.all([
        fetchFuelByCity({
          fuelType: "petrol",
          baseUrl,
          apiKey,
          rapidApiHost,
          city,
        }),
        fetchFuelByCity({
          fuelType: "diesel",
          baseUrl,
          apiKey,
          rapidApiHost,
          city,
        }),
      ]);

      return { petrol: petrolPrice, diesel: dieselPrice };
    } catch (error) {
      console.error("Fuel price API failed, using fallback:", error);
    }
  }

  return DEFAULT_PRICES;
};
