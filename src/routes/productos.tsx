import TableProducts from '../components/table-products'
import TablePagination from '../components/table-pagination'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../lib/types'
import { fetchProductos } from '../lib/data'
import { Loader2Icon } from 'lucide-react'

const Productos = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    void fetchProductos().then((data) => {
      setProducts(data)
      setFilteredProducts(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <div className="table-header">
        <input value={search} onChange={
          (e) => {
            setSearch(e.target.value)
            setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase())))
          }
        } className="search" placeholder="Buscar"/>
        <button className="add-button" onClick={() => navigate('/nuevo-producto')}>Agregar</button>
      </div>
      <div className="table-container">

        {loading && (
          <div className="loading-container">
            <Loader2Icon className="spin-icon" size={48} color="#ccc" />
          </div>
        )}

        {!!filteredProducts.length && (
          <>
            <TableProducts products={filteredProducts}/>
            <TablePagination count={filteredProducts.length}/>
          </>
        )}

        {!filteredProducts.length && !loading && (
          <div className="empty-container">
            <p>No hay productos</p>
          </div>
        )}
      </div>
    </>
  )
}
export default Productos
