import React from 'react'
import { BrowserRouter, Router , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/product/:product_name' element={ <ProductDetailsPage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App