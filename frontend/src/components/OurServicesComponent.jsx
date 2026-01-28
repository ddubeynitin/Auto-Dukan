import React from 'react'
import {
  FaArrowRight,
} from "react-icons/fa";

const OurServicesComponent = () => {

    const services = [
    {
      id: 1,
      name: "puc info",
      image: "./images/services/PUC_INFO.png",
    },
    {
      id: 1,
      name: "car info",
      image: "./images/services/CAR_INFO.png",
    },
    {
      id: 1,
      name: "garages",
      image: "./images/services/GARAGES.png",
    },
    {
      id: 1,
      name: "whashing center",
      image: "/images/services/WASHING_CENTER.png",
    },
    {
      id: 1,
      name: "towing",
      image: "/images/services/TOWING.png",
    },
    {
      id: 1,
      name: "petrol pump",
      image: "/images/services/PETROL_PUMP.png",
    },
    {
      id: 1,
      name: "ev station",
      image: "/images/services/EV_STATION.png",
    },
    {
      id: 1,
      name: "insurance info",
      image: "./images/services/INSURANCE_INFO.png",
    },
  ];

  return (
    <div className="w-full h-120 bg-gray-200 overflow-hidden">
            <div className="w-full h-[25%] flex justify-around items-end ">
              <div className="w-[85%] h-[80%] flex justify-between items-center">
                <p className="text-4xl text-black font-bebas">OUR SERVICES</p>
                <button className="h-10 w-30  flex justify-center items-center gap-2 text-white font-bebas rounded-lg bg-orange-500">
                  View all <FaArrowRight />
                </button>
              </div>
            </div>
    
            <div className="w-full h-[75%] flex justify-center items-start">
              <div className="w-[85%] h-[80%] lg:grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-3 gap-4 font-bebas">
                {/* service card */}
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="w-78 h-27 bg-white rounded-2xl flex justify-center items-center gap-5 border-2 border-gray-300  transition ease-in-out hover:border-2 hover:border-orange-500"
                  >
                    <div className="w-[90%] h-full flex justify-start items-center gap-5 p-5">
                      <img src={service.image} alt="" className="w-17.5 h-17.5" />
                      <h3 className="text-lg ">{service.name.toUpperCase()}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  )
}

export default OurServicesComponent