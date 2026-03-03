import React, { useEffect, useRef, useState } from "react";
import { FaCar, FaCartPlus, FaCrown, FaHeart, FaMapPin, FaMicrophone, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { fetchCart } from "../services/cartService";
import { auth } from "../config/firebase";
import { getCurrentLocation, getFuelPricesByLocation, reverseGeocode } from "../services/locationFuelService";

const LOCATION_FUEL_CACHE_KEY = "auto_dukan_location_fuel_cache";

const Header = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const currentUser = localStorage.getItem("auto_dukan_user");
    if (!currentUser) {
      return null;
    }

    try {
      return JSON.parse(currentUser);
    } catch (error) {
      console.error("Invalid auto_dukan_user in localStorage:", error);
      localStorage.removeItem("auto_dukan_user");
      return null;
    }
  });
  const [locationLabel, setLocationLabel] = useState("Detecting location...");
  const [fuelPrices, setFuelPrices] = useState({ petrol: 0, diesel: 0 });
  const hasLoadedLocationRef = useRef(false);

  useEffect(() => {
    const loadCartCount = async () => {
      try {
        const cart = await fetchCart();
        const totalItems = (cart.items || []).reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalItems);
      } catch (error) {
        console.error("Failed to load cart count:", error);
      }
    };

    loadCartCount();
  }, []);

  useEffect(() => {
    if (hasLoadedLocationRef.current) {
      return;
    }
    hasLoadedLocationRef.current = true;

    const loadLocationAndFuel = async () => {
      try {
        const cached = localStorage.getItem(LOCATION_FUEL_CACHE_KEY);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            if (parsed?.locationLabel && parsed?.fuelPrices) {
              setLocationLabel(parsed.locationLabel);
              setFuelPrices(parsed.fuelPrices);
              return;
            }
          } catch {
            localStorage.removeItem(LOCATION_FUEL_CACHE_KEY);
          }
        }

        if (navigator.permissions?.query) {
          const permission = await navigator.permissions.query({ name: "geolocation" });
          if (permission.state === "denied") {
            setLocationLabel("!Location");
            return;
          }
        }

        const position = await getCurrentLocation();
        const { latitude, longitude } = position.coords;
        const location = await reverseGeocode(latitude, longitude);
        setLocationLabel(location.displayLabel);

        const prices = await getFuelPricesByLocation({
          city: location.city,
          state: location.state,
          country: location.country,
          lat: latitude,
          lon: longitude,
        });
        setFuelPrices(prices);
        localStorage.setItem(
          LOCATION_FUEL_CACHE_KEY,
          JSON.stringify({
            locationLabel: location.displayLabel,
            fuelPrices: prices,
          })
        );
      } catch (error) {
        if (error?.code === 1) {
          setLocationLabel("Location unavailable");
          return;
        }
        console.error("Location/fuel lookup failed:", error);
        setLocationLabel("Location unavailable");
      }
    };

    loadLocationAndFuel();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
    localStorage.removeItem("auto_dukan_user");
    setLoggedInUser(null);
  };

  return (
    <header className="w-full lg:h-30 h-50">
      <div className="fixed bg-white flex justify-center items-center flex-col w-full z-50">
        <div className="lg:w-[70%] w-full flex justify-between items-center gap-4">
          <div className="w-full flex justify-center items-center">
            <p className="w-full flex lg:justify-start justify-center items-center text-sm pt-2 font-barlow ">
              <FaMapPin className="text-orange-400" /> {locationLabel} &nbsp;
              <span className="text-orange-500 font-bold">Petrol:</span> &nbsp; Rs{" "}
              {fuelPrices.petrol.toFixed(2)} &nbsp;
              <span className="text-orange-400 font-bold">Diesel:</span> &nbsp; Rs{" "}
              {fuelPrices.diesel.toFixed(2)}
            </p>
          </div>

          <div className="w-[20%] absolute lg:static top-10 right-5 flex justify-end items-center ">
            <div className=" flex h-8 justify-center items-center gap-5 pr-5">
              <FaHeart />
              <button className="relative" onClick={() => navigate("/cart")}>
                <FaCartPlus />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <FaCar />
            </div>
          </div>
        </div>

        <div className="w-full lg:flex justify-center items-center gap-4 p-2">
          <div className=" ">
            <img src="/images/logo.png" alt="logo" className="lg:w-60  lg:h-15 h-12" />
          </div>
          <div className=" lg:flex justify-start items-center lg:w-[40%] w-full p-2">
            <div className="h-10 lg:w-[80%] w-full flex justify-center items-center rounded-full gap-2 bg-gray-100 overflow-hidden">
              <input type="text" className="p-2 w-full focus:outline-none" placeholder="Search" />
              <FaMicrophone className="text-orange-500" />
              <div className="h-8 w-10 bg-orange-500 rounded-full flex justify-center items-center">
                <FaSearch className=" text-white" />
              </div>
            </div>
          </div>
          <div className="flex lg:justify-center justify-between items-center gap-4 p-2">
            <button className="w-30 h-8 flex justify-center items-center gap-2 border border-orange-500 p-2 rounded-lg">
              <FaCrown className="text-orange-500" /> Prime
            </button>
            {loggedInUser ? (
              <div className="relative group">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full border-2 border-orange-500 overflow-hidden"
                  aria-label="User profile"
                >
                  {loggedInUser.photoURL ? (
                    <img
                      src={loggedInUser.photoURL}
                      alt={loggedInUser.displayName || "User"}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-orange-500 text-white font-semibold">
                      {(loggedInUser.displayName || "U").charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>

                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl p-4 hidden group-hover:block z-50">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {loggedInUser.displayName || "User"}
                  </p>
                  <p className="text-xs text-gray-500 truncate mt-1">
                    {loggedInUser.email || "No email"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="mt-3 w-full h-9 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-50"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="w-30 h-8 border flex justify-center items-center border-orange-500 p-2 rounded-lg bg-orange-500 text-white"
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
