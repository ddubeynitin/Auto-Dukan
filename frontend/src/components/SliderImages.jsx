import React,  { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';


const SliderImages = () => {

    const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/sliders`)
      .then(res => res.json())
      .then(data => {
        // Safe check: agar data array hai tabhi set karein
        console.log(data);
        
        if(Array.isArray(data)) setSlides(data);
      })
      .catch(err => console.error("Slider fetch error:", err));


  }, []);

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Modules ko register karein
        spaceBetween={0}
        slidesPerView={1}
        // navigation // Arrow keys ke liye
        pagination={{ clickable: true }} // Dots ke liye
        autoplay={{ delay: 1000, disableOnInteraction: false }} 
        className="lg:h-auto h-40 md:h-125" // Responsive height
      >
        {slides.length > 0 ? (
          slides.map((slide) => (
            <SwiperSlide key={slide._id}>
              <div className="relative w-full h-full">
                <Link to={slide.link}>
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title} 
                  className="w-full h-full object-cover" 
                  />
                <div className="absolute inset-0 bg-black/10 flex items-end p-10"> 
                  {/* Overlay for better text visibility */}
                  <h2 className="text-white text-3xl md:text-5xl font-bold">
                    {slide.caption}
                  </h2>
                </div>
                  </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-200">
            Loading Sliders...
          </div>
        )}
      </Swiper>
    </div>
  )
}

export default SliderImages
