import {Product} from "../lib/types";
import {SubmitHandler, useForm} from "react-hook-form";
import styles from './product-form.module.css'
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import * as dayjs from "dayjs";

type ProductFormProps = {
    product?: Product;
    onSubmit: SubmitHandler<ProductValidationSchema>;
}

const productValidationSchema = z.object({
    id: z.string()
        .nonempty({ message: "El ID es requerido" })
        .min(3, { message: "ID no válido" })
        .max(10, { message: "ID no válido" })
    ,
    name: z.string()
        .nonempty({ message: "El Nombre es requerido" })
        .min(5, { message: "Nombre no válido" })
        .max(100, { message: "Nombre no válido" })
    ,
    description: z.string()
        .nonempty({ message: "La descripción es requerida" })
        .min(10, { message: "Descripción no válida" })
        .max(200, { message: "Descripción no válida" })
    ,
    logo: z.string().nonempty({ message: "La url del logo es requerida" }),
    date_release: z.string().nonempty({ message: "La fecha de liberación es requerida" }),
    date_revision: z.string().nonempty({ message: "La fecha de reestructuración es requerida" }),
});
type ProductValidationSchema = z.infer<typeof productValidationSchema>;

const ProductForm = ({product, onSubmit}: ProductFormProps) => {

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors, isValid, isSubmitted},
    } = useForm<ProductValidationSchema>({
        resolver: zodResolver(productValidationSchema),
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="form" autoComplete="off">
            <div className="form-fields">
                <div className={styles.inputField}>
                    <label>ID</label>
                    <input readOnly={!!product?.id} defaultValue={product?.id} {...register("id")} />
                    {errors.id && <span className={styles.validationMessage}>{errors.id?.message}</span>}
                </div>

                <div className={styles.inputField}>
                    <label>Nombre</label>
                    <input defaultValue={product?.name} {...register("name")} />
                    {errors.name && <span className={styles.validationMessage}>{errors.name?.message}</span>}
                </div>

                <div className={styles.inputField}>
                    <label>Descripcion</label>
                    <input defaultValue={product?.description} {...register("description")} />
                    {errors.description && <span className={styles.validationMessage}>{errors.description?.message}</span>}
                </div>

                <div className={styles.inputField}>
                    <label>Logo</label>
                    <input defaultValue={product?.logo} {...register("logo", {required: true})} />
                    {errors.logo && <span className={styles.validationMessage}>{errors.logo?.message}</span>}
                </div>

                <div className={styles.inputField}>
                    <label>Fecha de liberación</label>
                    <input type="date" defaultValue={product?.date_release} {...register("date_release")}
                    onChange={(e) => setValue("date_revision", dayjs(e.target.value).add(1, 'year').format('YYYY-MM-DD'))}
                    />
                    {errors.date_release && <span className={styles.validationMessage}>{errors.date_release?.message}</span>}
                </div>

                <div className={styles.inputField}>
                    <label>Fecha de revisión</label>
                    <input readOnly type="date" defaultValue={product?.date_revision} {...register("date_revision")} />
                    {errors.date_revision && <span className={styles.validationMessage}>{errors.date_revision?.message}</span>}
                </div>
            </div>

            <div className={styles.formActions}>
                <button onClick={() => reset()} type="button" className={styles.resetButton}>Reiniciar</button>
                <button disabled={isSubmitted && !isValid} type="submit" className={styles.sendButton}>Enviar</button>
            </div>
        </form>
    )
}

export default ProductForm
