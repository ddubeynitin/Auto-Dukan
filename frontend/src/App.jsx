import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import FeaturedProductPage from './pages/FeaturedProductPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/product/:product_name' element={ <ProductDetailsPage/> } />
        <Route path='/featured-product' element={ <FeaturedProductPage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App