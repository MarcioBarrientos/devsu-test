import {MoreVertical} from 'lucide-react'
import {useState} from 'react'
import {deleteProduct} from '../lib/api'
import ConfirmDialog from "./confirm-dialog";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import styles from './context-button.module.css'

const ContextButton = ({productId, onDelete}: {
    productId: string
    onDelete: () => void
}) => {
    const [open, setOpen] = useState(false)
    const handleDelete = async (id: string) => {
        await deleteProduct(id)
        onDelete()
        setOpen(false)
    }
    const navigate = useNavigate()
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <div className={styles.contextMenuContainer}>
            <div className={styles.actionButton}
                 onClick={() => setOpen(!open)}
                 onMouseLeave={() => setOpen(false)}>
                <MoreVertical size={18}/>
                {open && (
                    <div className={styles.contextMenu}>
                        <div>
                            <button onClick={() => navigate(`/editar-producto/${productId}`)} className={styles.contextMenuItem}>Editar</button>
                            <button onClick={() => setOpenDialog(true)} className={styles.contextMenuItem}>Eliminar</button>
                        </div>
                    </div>
                )}
            </div>

            <ConfirmDialog open={openDialog} onCancel={() => setOpenDialog(false)} title="Eliminar producto"
                           message="Deseas eliminar el producto eleccionado"
                           onConfirm={async () => {
                               try {
                                   await handleDelete(productId)
                                   toast('Producto eliminado')
                               } catch (e) {
                                   toast.error('Error al eliminar el producto')
                               }
                           }}
                                   />

        </div>
    )
}


export default ContextButton
