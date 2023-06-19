import Header from '../components/header'
import { Outlet } from 'react-router-dom'

function Products() {

  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Products
