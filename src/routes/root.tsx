import Header from '../components/header'
import {Outlet} from 'react-router-dom'
import {Toaster} from "react-hot-toast";

function Products() {

    return (
        <>
            <Header/>
            <Toaster/>
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}

export default Products
