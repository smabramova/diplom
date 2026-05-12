import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import CartModal from './components/CartModal'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ProductPage from './pages/ProductPage'
import './App.css'   

export default function App() {
  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <Header onCartClick={() => setCartOpen(true)} />
      <CartModal isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}