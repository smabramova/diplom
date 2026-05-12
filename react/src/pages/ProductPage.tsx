import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id!)) || productsData[0];
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const discountPercent = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="container product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="rating" style={{ fontSize: '1rem' }}>
          ★ {product.rating} (203 отзыва) • 1248 продаж
        </div>
        <div className="price-block-big">
          <span className="price">{product.price} ₽</span>
          {product.oldPrice && <span className="old-price" style={{ fontSize: '1.4rem' }}>{product.oldPrice} ₽</span>}
          {discountPercent > 0 && <span className="discount" style={{ fontSize: '1rem', padding: '4px 12px' }}>-{discountPercent}%</span>}
        </div>
        <div className="color-selector">
          <span>Количество:</span>
          <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => { for (let i = 0; i < qty; i++) addToCart(product); }}
        >
          Добавить в корзину
        </button>
        <p style={{ marginTop: '20px', color: '#555' }}>{product.description}</p>
      </div>
    </div>
  );
}