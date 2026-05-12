import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header({ onCartClick }: { onCartClick: () => void }) {
  const { totalCount } = useCart();
  return (
    <header className="header">
      <div className="container nav-bar">
       <Link to="/" className="logo">Kancmagaz</Link>
        <nav className="nav-links">
          <Link to="/catalog">Каталог</Link>
          <a href="#">Акции</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="cart-btn" onClick={onCartClick}>
          🛒 Корзина ({totalCount})
        </button>
      </div>
    </header>
  );
}