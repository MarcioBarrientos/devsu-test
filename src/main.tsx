import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import NewProduct from './routes/new-product'
import ListProducts from './routes/list-products'
import EditProduct from "./routes/edit-product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ListProducts /> },
      {
        path: "/",
        element: <ListProducts />,
      },
      {
        path: "/nuevo-producto",
        element: <NewProduct />,
      },
      {
        path: "/editar-producto/:id",
        element: <EditProduct />,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
