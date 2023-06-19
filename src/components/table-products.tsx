import { InfoIcon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import { Product } from '../lib/types'
import React from 'react'
import ContextButton from './context-button'

const addImageFallback = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.src = 'https://via.placeholder.com/45x45';
};

const TableProducts = ({products}: {products: Product[]}) => {
  return (
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

      {products.map((product) => (
        <tr key={product.id}>
          <td><img onError={addImageFallback} alt={product.name} className="product-logo" src={product.logo} /></td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{formatDate(product.date_release)}</td>
          <td>{formatDate(product.date_revision)}</td>
          <td>
           <ContextButton />
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
export default TableProducts
