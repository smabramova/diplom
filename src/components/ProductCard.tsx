import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const discountPercent = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h3>{product.name}</h3>
        <div className="rating">★ {product.rating.toFixed(1)} ({Math.floor(Math.random() * 50 + 10)} отзывов)</div>
        <div className="price-block">
          <span className="price">{product.price} ₽</span>
          {product.oldPrice && <span className="old-price">{product.oldPrice} ₽</span>}
          {discountPercent > 0 && <span className="discount">-{discountPercent}%</span>}
        </div>
        <button className="btn-buy" onClick={() => addToCart(product)}>В корзину</button>
        <Link to={`/product/${product.id}`} className="more-link">Подробнее</Link>
      </div>
    </div>
  );
}