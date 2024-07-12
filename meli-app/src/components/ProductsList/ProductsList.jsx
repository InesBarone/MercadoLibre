import { useLoaderData } from 'react-router-dom';  

import ProductCard from '../ProductCard/ProductCard';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

import './ProductsList.scss';

function ProductsList() {
  const data = useLoaderData();

  return (
    <>
        {data === null? <ErrorComponent errorType={'500'}/> :
            <>
                {data.items.length > 0 && (
                    <ul className='products-list'>
                        {data.items.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            id={product.id} 
                            picture={product.picture} 
                            title={product.title}
                            price_amount={product.price.amount} 
                            price_decimal={product.price.decimal?product.price.decimal:""} 
                            free_shipping={product.free_shipping}
                            address={product.address}
                            currency={product.currency}/>)
                        )}
                    </ul>
                )}
                {data.items.length === 0 && (
                    <div className='no-product-list'>
                        <h3>No se encontraron productos</h3>
                        <p>Busca los productos en la barra de búsqueda!</p>
                    </div>
                )}
            </>
        }
    </>
)
}

export default ProductsList
