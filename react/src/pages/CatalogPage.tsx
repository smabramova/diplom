import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsData, categoriesList } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useDebounce } from '../hooks/useDebounce';

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const debouncedSearch = useDebounce(searchText, 300);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const allBrands = useMemo(
    () => Array.from(new Set(productsData.map(p => p.brand).filter(Boolean))),
    []
  );

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filtered = useMemo(() => {
    return productsData.filter(p => {
      const matchCat = selectedCategory === '' || p.category === selectedCategory;
      const matchSearch =
        debouncedSearch === '' ||
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        p.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        p.brand.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchPrice =
        (priceMin === '' || p.price >= Number(priceMin)) &&
        (priceMax === '' || p.price <= Number(priceMax));
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
      return matchCat && matchSearch && matchPrice && matchBrand;
    });
  }, [debouncedSearch, selectedCategory, priceMin, priceMax, selectedBrands]);

  return (
    <div className="container section">
      <h1 className="section-title">Каталог</h1>
      <div className="catalog-layout">
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

        <div className="catalog-products">
          {/* Поле поиска с иконкой */}
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Поиск по названию, бренду, описанию..."
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="search-input-modern"
            />
            </div>
          <div className="products-grid">
            {filtered.length > 0 ? (
              filtered.map(product => <ProductCard key={product.id} product={product} />)
            ) : (
              <p style={{ textAlign: 'center', width: '100%', padding: '40px' }}>
                Ничего не найдено 😔
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 