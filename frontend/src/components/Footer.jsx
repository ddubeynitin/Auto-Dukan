import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="w-full lg:h-80 bg-white overflow-hidden lg:flex justify-center items-center">
        <div className="lg:w-[50%] lg:h-90 flex lg:justify-end justify-center items-center">
          <div className="w-[80%] lg:h-80 h-60 flex flex-col justify-center lg:items-start gap-5">
              <div className="h-15 w-60 ">
                <img src="/images/logo.png" className="w-full h-full" alt="" />
              </div>
              <p className="font-barlow text-[12px]">India's biggest online marketplace for car <br /> spare parts</p>
              <div className="flex gap-4 text-2xl text-blue-900">
                  <FaFacebook/>
                  <FaInstagram/>
                  <FaLinkedin/>
              </div>
              <h2 className="font-barlow"><span className="text-orange-500 font-barlow font-bold">Call Us On:</span> +91 9339332933</h2>
          </div>
        </div>
        <div className="lg:w-[50%] lg:h-90 flex justify-center items-center">
          <table className="font-bebas">
            <thead>
              <tr className="text-lg">
                <th>ABOUT</th>
                <th>POLICY</th>
                <th>USEFUL LINKS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>About us</td>
                <td>Return Policy</td>
                <td>Category</td>
              </tr>
              <tr>
                <td>Contact us</td>
                <td>Privacy Policy</td>
                <td>OEM Brands</td>
              </tr>
              <tr>
                <td>Blogs</td>
                <td>Disclaimer</td>
                <td>OES Brands</td>
              </tr>
              <tr>
                <td>FAQ</td>
                <td>Terms of Use</td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
  )
}

export default Footer