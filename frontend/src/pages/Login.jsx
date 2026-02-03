import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone } from 'react-icons/fa';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useNavigate } from 'react-router-dom';

const countries = [
  { name: 'Honduras', code: '+504', flag: '🇭🇳', flagIcon:'fi fi-hn'},
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰', flagIcon:'fi fi-hk'},
  { name: 'Hungary', code: '+36', flag: '🇭🇺', flagIcon:'fi fi-hu'},
  { name: 'Iceland', code: '+354', flag: '🇮🇸', flagIcon:'fi fi-is'},
  { name: 'India', code: '+91', flag: 'IN', flagIcon:'fi fi-in'},
  { name: 'USA', code: '+1', flag: '🇺🇸', flagIcon:'fi fi-us' },
];

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[4]);
  const dropdownRef = useRef(null);
  const [PhoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const isNumberValid = (PhoneNumber) => {
    const phoneRegex = /^[0-9]{10,12}$/;
    return phoneRegex.test(PhoneNumber);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogin = (
    phoneNumber) => {
    if (!phoneNumber || !isNumberValid(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }else{
      navigate('/verify-otp');
      alert(`OTP sent to ${selectedCountry.code} ${phoneNumber}`);
    }
    // Add your login logic here
  }

  return (
    <>
      <Header />
      <div className='w-full h-120 flex justify-center items-center bg-gray-50'>
        <div className='w-112.5 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 relative'>
          <h1 className='w-full flex justify-center items-center mb-5'><FaPhone className='rotate-90'/></h1>
          <h1 className='w-full text-center font-bold text-2xl text-gray-800 mb-6'>
            Mobile Number Verification
          </h1>

          <div className="flex flex-col gap-1 relative" ref={dropdownRef}>
            <label className='text-gray-500 text-sm mb-1'>Mobile Number</label>
            
            <div className='flex items-center border rounded-lg h-12 px-3 focus-within:border-blue-500 transition-all'>

              <div 
                className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded'
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className={`text-xl ${selectedCountry.flagIcon}`}></span>
                
                <span className='text-xs text-gray-400'>▼</span>
              </div>


              <div className='flex items-center w-full ml-3'>
                <span className='text-gray-600 mr-2'>{selectedCountry.code}</span>
                <input 
                  type="tel" 
                  placeholder="7890 456 123" 
                  className='w-full outline-none text-gray-700'
                  value={PhoneNumber}
                  onChange={(e) => { 
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                    setPhoneNumber(onlyNumbers);
                  }}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  inputMode="numeric"
                  maxLength="12"
                />
              </div>
            </div>

            {isOpen && (
              <div className='absolute top-full left-0 w-full mt-2 bg-white border rounded-lg shadow-2xl z-50 max-h-60 overflow-y-auto'>
                <div className='p-2 sticky top-0 bg-white border-b'>
                  <input 
                    type="text" 
                    placeholder="Search countries" 
                    className='w-full p-2 text-sm border rounded outline-none focus:border-blue-400'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                  />
                </div>
                {filteredCountries.map((country, index) => (
                  <div 
                    key={index}
                    className='flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer text-sm'
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    <div className='flex items-center gap-3'>
                      <span>{country.flag}</span>
                      <span className='text-gray-700'>{country.name}</span>
                    </div>
                    <span className='text-gray-400'>{country.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleLogin(PhoneNumber)}
            disabled={!isNumberValid(PhoneNumber)}
            className={`w-full h-12 transition-all rounded-lg text-white font-bold text-lg mt-6 shadow-md ${isNumberValid(PhoneNumber) ? 'bg-[#FF6B35] hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Send OTP
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;