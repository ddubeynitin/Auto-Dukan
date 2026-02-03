import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const VerifyOTP = () => {
  return (
    <>
    <Header/>
        <div className="w-full h-120 flex justify-center items-center bg-gray-50">
          <div className="w-112.5 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 relative">
            <h1 className="w-full text-center font-bold text-2xl text-gray-800 mb-6">
              Verify OTP
            </h1>
            <div className="flex justify-center mb-4">
            </div>
            <p className="text-center text-gray-600 mb-6">
              Enter the 6-digit code sent to your mobile number
            </p>
            <div className="flex justify-center gap-3 mb-6">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 border border-gray-300 rounded-lg text-center focus:outline-none focus:border-blue-500"
                />
              ))}
            </div>
            <button className="w-full h-12 bg-[#FF6B35] hover:bg-orange-600 transition-all rounded-lg text-white font-bold text-lg shadow-md">
              Verify OTP
            </button>
          </div>
        </div>
    <Footer/>
    </>
  )
}

export default VerifyOTP