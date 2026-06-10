import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

type Mode = 'login' | 'register';

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login, register } = useAuth();
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  if (!isLoginModalOpen) return null;

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Заполните email и пароль');
      return;
    }

    if (mode === 'register') {
      if (!name.trim()) {
        setError('Введите имя');
        return;
      }
      if (password !== confirmPassword) {
        setError('Пароли не совпадают');
        return;
      }
      const success = register(name, email, password);
      if (!success) {
        setError('Пользователь с таким email уже существует');
        return;
      }
      resetForm();
      return;
    }

    // режим входа
    const success = login(email, password);
    if (!success) {
      setError('Неверный email или пароль');
      return;
    }
    resetForm();
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    resetForm();
  };

  return (
    <div className="modal active" onClick={closeLoginModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px' }}>
        <button className="modal-close" onClick={closeLoginModal}>✕</button>
        <h2>{mode === 'login' ? 'Вход' : 'Регистрация'}</h2>

        <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
          {mode === 'register' && (
            <div style={{ marginBottom: '15px' }}>
              <label>Имя:</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                style={inputStyle}
                placeholder="Ваше имя"
              />
            </div>
          )}
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={inputStyle}
              placeholder="example@mail.ru"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="••••••"
            />
          </div>
          {mode === 'register' && (
            <div style={{ marginBottom: '15px' }}>
              <label>Подтверждение пароля:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                style={inputStyle}
                placeholder="••••••"
              />
            </div>
          )}

          {error && <p style={{ color: '#e74c3c', fontSize: '0.9rem', marginBottom: '10px' }}>{error}</p>}

          <button type="submit" className="btn-buy" style={{ width: '100%', marginTop: '5px' }}>
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.95rem' }}>
          {mode === 'login' ? (
            <>
              Нет аккаунта?{' '}
              <button
                onClick={switchMode}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}
              >Зарегистрироваться
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{' '}
              <button
                onClick={switchMode}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}
              >
                Войти
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '1rem',
  marginTop: '4px',
  outline: 'none',
  transition: 'border-color 0.2s',
};