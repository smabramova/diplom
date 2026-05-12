import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h3>{product.name}</h3>
        <div className="price">{product.price} ₽</div>
        <button className="btn-buy" onClick={() => addToCart(product)}>
          В корзину
        </button>
        <Link to={`/product/${product.id}`}>Подробнее</Link>
      </div>
    </div>
  )
}