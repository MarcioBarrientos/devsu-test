import {Product} from '../lib/types'
import {createProduct, verifyProductId} from '../lib/api'
import {SubmitHandler} from "react-hook-form";
import ProductForm from "../components/product-form";
import * as dayjs from "dayjs";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const initialState = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: dayjs().format('YYYY-MM-DD'),
    date_revision: dayjs().add(1, 'year').format('YYYY-MM-DD')
}
const NuevoProducto = () => {
    const navigate = useNavigate()
    const submitHandler: SubmitHandler<Product> = async (data) => {
        try {
            const verify = await verifyProductId(data.id)
            if (verify) {
                toast.error('El id del producto ya existe')
            } else {
                await createProduct(data)
                toast('Producto creado con éxito')
                navigate('/')
            }
        } catch (error) {
            toast.error('Ha ocurrido un error al crear el producto')
        }
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>
                    Formulario de registro
                </h1>
            </div>
            <ProductForm product={initialState} onSubmit={submitHandler}/>
        </div>
    )
}
export default NuevoProducto
