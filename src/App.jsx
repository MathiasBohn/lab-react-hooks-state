import { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './index.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const handleToggleDark = () => setDarkMode((d) => !d)
  const handleAddToCart = (product) => setCartItems((items) => [...items, product.name])
  const handleCategoryChange = (e) => setCategory(e.target.value)

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>Super duper shopping App</h1>
      <p>Welcome to your OWN APP! You will be doing super exciting filtering, cart management, and dark mode.</p>

      <DarkModeToggle isDark={darkMode} onToggle={handleToggleDark} />

      <label htmlFor="category">Filter by Category: </label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList selectedCategory={category} onAddToCart={handleAddToCart} />

      <Cart items={cartItems} />
    </div>
  )
}

export default App