import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './routes/RootLayout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Products, { loader as productsLoader } from './routes/Products/Products.jsx'
import ProductDetails, { loader as productLoader} from './routes/ProductDetails/ProductDetails.jsx'
import ErrorComponent from './components/ErrorComponent/ErrorComponent.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
    {
      path: '/items',
      element: <Products />,
      loader: productsLoader,
    },
    {
      path: '/items/:id',
      element: <ProductDetails/>,
      loader: productLoader
    }
  ]},
  {
    path: '/', element: <RootLayout/>, children: [
      {
        path: '/*',
        element: <ErrorComponent errorType={'404'} />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
