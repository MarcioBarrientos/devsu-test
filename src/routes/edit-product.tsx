import {Product} from '../lib/types'
import {createProduct, fetchProducts} from '../lib/api'
import {SubmitHandler} from "react-hook-form";
import ProductForm from "../components/product-form";
import toast from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import dayjs from "dayjs/esm/index.js";

const EditProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [product, setProduct] = useState<Product>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            fetchProducts().then((data: Product[]) => {
                const product = data.find((product) => product.id === id)
                if (product) {
                    setProduct({
                        ...product,
                        date_release: dayjs(product?.date_release).format('YYYY-MM-DD'),
                        date_revision: dayjs(product?.date_revision).format('YYYY-MM-DD')
                    })
                }
                setLoading(false)
            })
        }

    }, [id])
    const submitHandler: SubmitHandler<Product> = async (data) => {
        try {
            await createProduct(data)
            toast('Producto editado con éxito')
            navigate('/')
        } catch (error) {
            toast.error('Ha ocurrido un error al editar el producto')
        }
    }

    if (loading) return null
    return (
        <div className="form-container">
            <div className="form-header">
                <h1>
                    Formulario de edición
                </h1>
            </div>
            <ProductForm product={product} onSubmit={submitHandler}/>
        </div>
    )
}
export default EditProduct
