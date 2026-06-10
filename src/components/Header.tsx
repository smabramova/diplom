import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Header({ onCartClick }: { onCartClick: () => void }) {
  const { totalCount } = useCart();
  const { user, logout, openLoginModal } = useAuth();

  return (
    <header className="header">
      <div className="container nav-bar">
        <Link to="/" className="logo">Kanzmagaz</Link>
        <nav className="nav-links">
          <Link to="/catalog">Каталог</Link>
          <a href="#">Акции</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {user ? (
            <div className="user-menu">
              <span style={{ color: 'white', fontWeight: 500 }}>👤 {user.name}</span>
              <button onClick={logout} className="cart-btn" style={{ background: '#e74c3c', marginLeft: '10px' }}>Выйти</button>
            </div>
          ) : (
            <button className="cart-btn" onClick={openLoginModal}>Войти</button>
          )}
          <button className="cart-btn" onClick={onCartClick}>
            🛒 Корзина ({totalCount})
          </button>
        </div>
      </div>
    </header>
  );
}