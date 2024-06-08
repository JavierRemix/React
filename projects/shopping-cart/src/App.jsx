import { products as inicialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'


function App() {
  const [products] = useState(inicialProducts)
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (
          product.category === filter.category || 
          filter.category === 'all'
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)



  return (
    <>
      <Header></Header>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
