import { FormEvent, useState } from 'react'
import { Product } from '../lib/types.ts'
import { createProduct } from '../lib/api.ts'



const NuevoProducto = () => {
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: new Date().toISOString().split('T')[0],
    date_revision: new Date().toISOString().split('T')[0],
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createProduct(product).then(() => {
      alert('Producto creado')
    })
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    setProduct({
      ...product,
      [name]: value,
    })
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>
          Formulario de registro
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-fields">
          <div className="form-group">
            <label>ID</label>
            <input type="text" name="id" value={product.id} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Nombre</label>
            <input name="name" value={product.name} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Descripcion</label>
            <input name="description"  value={product.description} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Logo</label>
            <input name="logo" value={product.logo} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Fecha de liberacion</label>
            <input type="date" name="date_release" value={product.date_release} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Fecha de reestructuracion</label>
            <input type="date"  name="date_revision" value={product.date_revision.toString()} onChange={handleChange}/>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="reset-button">Reiniciar</button>
          <button type="submit" className="send-button">Enviar</button>
        </div>
      </form>
    </div>
  )
}
export default NuevoProducto
