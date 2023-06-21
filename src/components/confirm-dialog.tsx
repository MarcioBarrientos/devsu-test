import styles from './confirm-dialog.module.css';
import {createPortal} from "react-dom";

type ConfirmDialogProps = {
    open: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}
const ConfirmDialog = ({
                           open,
                           title,
                           message,
                           onConfirm,
                           onCancel
                       }: ConfirmDialogProps) => {

    if (!open) return null;

    return (
        <>
            {createPortal(
                (
                    <>
                        <div className={styles.dialog}>
                            <h1>{title}</h1>
                            <p>{message}</p>

                            <div className={styles.buttons}>
                                <button onClick={onCancel}>Cancelar</button>
                                <button onClick={onConfirm} className={styles.confirm}>Confirmar</button>
                            </div>
                        </div>

                        <div onClick={onCancel} className={styles.overlay}/>
                    </>
                ),
                document.body
            )}
        </>
    );
}

export default ConfirmDialog;
