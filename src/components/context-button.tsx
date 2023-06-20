import { MoreVertical } from 'lucide-react'
import { useState } from 'react'
import { deleteProduct } from '../lib/api.ts'

const ContextButton = ({productId, onDelete}:{
  productId: string
  onDelete: () => void
}) => {
  const [open, setOpen] = useState(false)
  const handleDelete = async (id: string) => {
    if (confirm('¿Deseas borrar este producto?')) {
      await deleteProduct(id)
      onDelete()
    }

  }
  return (
    <div className="context-menu-container">
      <div className="action-button"
              onClick={() => setOpen(!open)}
              onMouseLeave={() => setOpen(false)}>
        <MoreVertical size={18}/>
        {open && (
          <div className="context-menu">
            <button className="context-menu__item">Edit</button>
            <button onClick={() => handleDelete(productId)} className="context-menu__item">Delete</button>
          </div>
        )}
      </div>
    </div>
  )
}


export default ContextButton
