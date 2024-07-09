import { useLoaderData } from 'react-router-dom';  

import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

function ProductsList() {
  const products = useLoaderData();


  return (
    <>
        {products.length > 0 && (
            <ul className='products-list'>
                {products.map((product) => <ProductCard key={product.id} id={product.id} image={product.image_src} description={product.description} textButton={product.textButton} price={product.price} shipping={product.shipping}/>)}
            </ul>
        )}
        {products.length === 0 && (
            <div className='no-product-list'>
                <h2>Busca los productos que estás buscando!</h2>
                <p>Empezá a recorrer nuestra tienda con la barra de búsqueda.</p>
            </div>
        )}
    </>
)
}

export default ProductsList
