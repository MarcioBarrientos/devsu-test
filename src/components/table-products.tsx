import {InfoIcon} from 'lucide-react'
import {Product} from '../lib/types'
import React from 'react'
import ContextButton from './context-button'
import * as dayjs from "dayjs";

const addImageFallback = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = 'https://via.placeholder.com/45x45'
}

const TableProducts = ({products, setProducts}: {
                           products: Product[]
                           setProducts: (products: Product[]) => void
                       }
) => {
    const handleSuccessDelete = (id: string) => (
        setProducts(products.filter((product) => product.id !== id))
    )

    return (
        <table>
            <thead>
            <tr>
                <th>Logo</th>
                <th>Nombre del producto</th>
                <th><span>Descripcion <InfoIcon size={18}/></span></th>
                <th><span>Fecha de liberación <InfoIcon size={18}/></span></th>
                <th><span>Fecha de reestructuración <InfoIcon size={18}/></span></th>
                <th></th>
            </tr>
            </thead>
            <tbody>

            {products.map((product) => (
                <tr key={product.id}>
                    <td><img onError={addImageFallback} alt={product.name} className="product-logo" src={product.logo}/>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{dayjs(product.date_release).format('YYYY-MM-DD')}</td>
                    <td>{dayjs(product.date_revision).format('YYYY-MM-DD')}</td>
                    <td>
                        <ContextButton onDelete={() => handleSuccessDelete(product.id)} productId={product.id}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default TableProducts
