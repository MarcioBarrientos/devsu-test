import { MoreVertical } from 'lucide-react'
import { useState } from 'react'

const ContextButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="context-menu-container">
      <button className="action-button" onClick={() => setOpen(!open)}>
        <MoreVertical size={18} />
      </button>
      {open && (
        <div className="context-menu" onMouseLeave={() => setOpen(false)}>
          <button className="context-menu__item">Edit</button>
          <button className="context-menu__item">Delete</button>
        </div>
      )}
    </div>
  )
}
export default ContextButton
