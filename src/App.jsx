import React, { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
//import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import './App.css';
import Filters from './components/Filters.jsx';


function App() {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <div className="shop-container">
        <aside className="filters-column">
          <section className="filters-content">
            <Filters />
          </section>
        </aside>
        <main className="products-container">
          <Cart />
          <Products products={filteredProducts} />
        </main>
      </div>
      <Footer />
    </CartProvider>
  )
}

export default App
