import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product } from '../data/products'

interface CartItem extends Product {
  qty: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  totalCount: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('shopCart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('shopCart', JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id: number) => setItems(prev => prev.filter(item => item.id !== id))
  const clearCart = () => setItems([])

  const totalCount = items.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}