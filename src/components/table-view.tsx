import { InfoIcon, MoreVertical } from 'lucide-react'
import { useEffect, useState } from 'react'

type Product = {
  id: string
  name: string
  logo: string
  description: string
  date_release: Date
  date_revision: Date
}

const TableView = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  async function getProducts() {
    const response = await fetch('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products',{
      headers: {
        'authorId': '1'
      }
    })
    const data = await response.json() as Product[]
    setProducts(data)
    setFilteredProducts(data)
  }

  useEffect(() => {
    void getProducts()
  }, [])

  return (
    <div className="table-view">
      <div className="table-view-header">
        <input value={search} onChange={
          (e) => {
            setSearch(e.target.value)
            setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase())))
          }
        } className="search" placeholder="Buscar" />
        <button className="add-button" >Agregar</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
          <tr>
            <th>Logo</th>
            <th>Nombre del producto</th>
            <th><span>Descripcion <InfoIcon size={18} /></span></th>
            <th><span>Fecha de liberación <InfoIcon size={18} /></span></th>
            <th><span>Fecha de reestructuración <InfoIcon size={18} /></span></th>
            <th></th>
          </tr>
          </thead>
          <tbody>

          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td><img alt={product.name} className="product-logo" src={product.logo} /></td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.date_release.toString()}</td>
              <td>Second Date</td>
              <td><MoreVertical size={18} /></td>
            </tr>
          ))}
          </tbody>
        </table>
        <div className="table-view-footer">
          <div>
            <strong>{filteredProducts.length} resultados</strong>
          </div>
          <div className="pagination">
            <button className="pagination-button">Anterior</button>
            <button className="pagination-button">Siguiente</button>
            <select className="pagination-dropdown">
              <option value="5" selected>5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
      </div>


    </div>
  )
}
export default TableView
