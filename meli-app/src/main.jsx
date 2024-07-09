import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './routes/RootLayout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products, { loader as productsLoader } from './routes/Products/Products.jsx'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {
      path: '/',
      element: <Products />,
      loader: productsLoader,
      
    }
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
