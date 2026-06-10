import { useCart } from '../context/CartContext'

export default function CartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, totalPrice, removeFromCart, clearCart } = useCart()
  if (!isOpen) return null
  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>Корзина</h2>
        <ul className="cart-items">
          {items.map(item => (
            <li key={item.id}>
              <span>{item.name} ({item.qty} шт.)</span>
              <span>{item.price * item.qty} ₽</span>
              <button onClick={() => removeFromCart(item.id)}>✕</button>
            </li>
          ))}
        </ul>
        <p><strong>Итого:</strong> {totalPrice} ₽</p>
        <button className="btn-buy" onClick={clearCart}>Очистить корзину</button>
      </div>
    </div>
  )
}