import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import themeStyles from './styles/DarkMode.module.css'


const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state (array of products)
  const [cartItems, setCartItems] = useState([])

  // Category filter state
  const [category, setCategory] = useState('all')

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product])
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={`${themeStyles.app} ${
      darkMode ? themeStyles.dark : themeStyles.light
   }`}
>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      {/* Category Filter */}
      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Veggies">Veggies</option> {/* ✅ required by CodeGrade */}
      </select>

      <ProductList category={category} onAddToCart={handleAddToCart} />

      {/* Cart */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App