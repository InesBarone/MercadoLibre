import { useLoaderData } from 'react-router-dom';  

import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

function ProductsList() {
  const data = useLoaderData();

  return (
    <>
        {data.items.length > 0 && (
            <ul className='products-list'>
                {data.items.map((product) => (
                <ProductCard 
                    key={product.id} 
                    id={product.id} 
                    picture={product.picture} 
                    title={product.title} 
                    textButton={'More Info'} 
                    price_amount={product.price.amount} 
                    price_decimal={product.price.decimal?product.price.decimal:""} 
                    price_currency={product.price.currency} 
                    free_shipping={product.free_shipping}/>)
                )}
            </ul>
        )}
        {data.length === 0 && (
            <div className='no-product-list'>
                <h2>Busca los productos que estás buscando!</h2>
                <p>Empezá a recorrer nuestra tienda con la barra de búsqueda.</p>
            </div>
        )}
    </>
)
}

export default ProductsList
