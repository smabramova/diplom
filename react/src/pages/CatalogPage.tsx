import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsData, categoriesList } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const allBrands = Array.from(new Set(productsData.map(p => p.brand).filter(Boolean)));

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filtered = productsData.filter(p => {
    const matchCat = selectedCategory === '' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchText.toLowerCase());
    const matchPrice =
      (priceMin === '' || p.price >= Number(priceMin)) &&
      (priceMax === '' || p.price <= Number(priceMax));
    const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    return matchCat && matchSearch && matchPrice && matchBrand;
  });

  return (
    <div className="container section">
      <h1 className="section-title">Каталог</h1>
      <div className="catalog-layout">
        {/* Фильтры боковая панель */}
        <aside className="filters-sidebar">
          <h3>Фильтры</h3>
          <div className="filter-group">
            <h4>Категория</h4>
            {categoriesList.map(cat => (
              <label key={cat} className="checkbox-list">
                <input
                  type="checkbox"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                />
                {cat}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <h4>Цена, ₽</h4>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="от"
                value={priceMin}
                onChange={e => setPriceMin(e.target.value)}
              />
              <input
                type="number"
                placeholder="до"
                value={priceMax}
                onChange={e => setPriceMax(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-group">
            <h4>Бренд</h4>
            {allBrands.map(brand => (
              <label key={brand} className="checkbox-list">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
        </aside>

        {/* Сетка товаров */}
        <div className="catalog-products">
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="search-input"
            style={{ marginBottom: '20px', width: '100%' }}
          />
          <div className="products-grid">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}