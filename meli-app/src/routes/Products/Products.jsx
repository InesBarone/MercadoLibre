import ProductsList from "../../components/ProductsList/ProductsList"
import { Outlet } from 'react-router-dom';
import './Products.css'

function Products() {

  return (
    <>
        <Outlet />
        <main>
            <div className="products-background">
                <ProductsList />
            </div>
        </main>
    </>
  )
}

export default Products

export async function loader() {
//   const response = await fetch('http://localhost:8080/posts');
//   const resData = await response.json();
    const products = {
        products: [
            {
                id: 1,
                image_src: '/src/assets/imagen.jpg',
                price: '1.900',
                description: 'Esta es la description que se va a tomar en cuenta para el pryecto que estoy haciendo',
                textButton: 'texto',
                shipping: true,
            },
            {
                id: 2,
                image_src: '/src/assets/phone.webp',
                price:'1.900',
                description: 'Esta es la description que se va a tomar en cuenta para el pryecto que estoy haciendo',
                textButton: 'texto',
                shipping: false,
            },
            {
                id: 3,
                image_src: '/src/assets/imagen.jpg',
                price: '1.900',
                description: 'Esta es la description que se va a tomar en cuenta para el pryecto que estoy haciendo',
                textButton: 'texto',
                shipping: true,
            },
            {
                id: 4,
                image_src: '/src/assets/imagen.jpg',
                price: '1.900',
                description: 'Esta es la description que se va a tomar en cuenta para el pryecto que estoy haciendo',
                textButton: 'texto',
                shipping: true,
            },
            
        ]
        // products: []
    }
    return products.products;
}