import React from 'react'

const PromotionImageComponent = () => {
  return (
    <div className="w-full lg:h-140 h-220 bg-white-200 relative -z-1 flex justify-center items-center ">
            <div className="lg:w-[80%] w-full h-full flex justify-center items-center">
              <div className="lg:w-full w-full lg:h-140 h-full lg:bg-[url('/images/poster2.jpg')] bg-[url('/images/poster2_vertical.jpg')] bg-cover bg-center">
              </div>
            </div>
            <div className="absolute lg:right-100  lg:bottom-50 bottom-30 flex flex-col justify-center items-center gap-4">
              <h1 className="lg:text-5xl text-center leading-15 w-60 text-5xl font-bebas text-orange-500">
                Download AutoDukan App
              </h1>
              <p className="text-lg font-barlow font-bold w-80 text-center">
                Choose and book a seamless car service experience and also get
                exciting offers with the Autodukan App
              </p>
              <div>
                <img src="/images/download.png" alt="" />
              </div>
            </div>
          </div>
  )
}

export default PromotionImageComponent