import { Link } from 'react-router-dom';
import { productsData, categoriesList } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const popular = productsData.filter(p => p.popular);
  return (
    <>
      {/* Hero / Баннер */}
      <section className="hero">
        <h1>Всё для вашего творчества и работы!</h1>
        <p>Широкий выбор канцелярских товаров</p>
        <div className="hero-buttons">
          <Link to="/catalog" className="btn btn-primary">Перейти в каталог</Link>
          <a href="#" className="btn btn-outline">Акции и скидки</a>
        </div>
      </section>
 

      {/* Промо-баннер (можно добавить) */}
      <div className="container promo-banner">
  <div className="promo-text">
    <h2> Школьный сезон — скидки до 30%!</h2>
    <p>На весь ассортимент для школьников и студентов</p>
  </div>
  <Link to="/catalog" className="btn">Использовать скидку</Link>
</div>
      {/* Категории */}
      <div className="container section">
        <h2 className="section-title">Категории товаров</h2>
        <div className="categories-grid">
          {categoriesList.map(cat => (
            <Link key={cat} to={`/catalog?category=${cat}`} className="cat-card">
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Популярные товары */}
      <div className="container section">
        <h2 className="section-title">Популярные товары</h2>
        <div className="products-grid">
          {popular.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </>
  );
}
const categoriesWithIcons = [
  { name: "Ручки и карандаши", icon: "✒️", color: "#FF6B35" },
  { name: "Маркеры", icon: "🖍️", color: "#2b5b8b" },
  { name: "Фломастеры", icon: "🎨", color: "#e74c3c" },
  { name: "Линейки и циркули", icon: "📏", color: "#6c5ce7" },
  { name: "Тетради и блокноты", icon: "📓", color: "#00b894" },
  { name: "Рисование", icon: "🖌️", color: "#fd79a8" },
  { name: "Офисная", icon: "💼", color: "#0984e3" }
];

// внутри JSX:
{categoriesWithIcons.map(cat => (
  <Link key={cat.name} to={`/catalog?category=${cat.name}`} className="cat-card" style={{ borderTop: `4px solid ${cat.color}` }}>
    <span className="cat-icon">{cat.icon}</span>
    {cat.name}
  </Link>
))}
