import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import FeaturedProductPage from './pages/FeaturedProductPage'
import VerifyOTP from './pages/VerifyOTP'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/verify-otp' element={ <VerifyOTP/> } />
        <Route path='/product/:product_name' element={ <ProductDetailsPage/> } />
        <Route path='/featured-product' element={ <FeaturedProductPage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App