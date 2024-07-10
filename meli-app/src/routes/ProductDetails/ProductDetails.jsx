import { useLoaderData, Link } from 'react-router-dom';

import './ProductDetails.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function ProductDetails() {
  const productData = useLoaderData();

  return (
    <>
      <Breadcrumb />
      <div className='product-details-container'>
        <div className='product-details-main'>
          <div className='product-details-image-container'>
            <img src={productData.item.picture} alt="Imagen de producto"/>
          </div>
          <div className='product-details-info'>
            <span className='product-details-type'>Primer texto</span>
            <h3 className='product-details-title'>{productData.item.title}</h3>
            <span className='product-details-price'>{productData.item.price.currency}$ {productData.item.price.amount}<span>{productData.item.price.decimals?productData.item.price.decimals: ""}</span></span>
            <button className='product-details-but'>Comprar</button>
          </div>
        </div>
        <div className='product-details-description'>
          <span>Description</span>
          <p>{productData.item.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

export async function loader({params}) {
  // const response = await fetch('http://localhost:8080/posts/' + params.id);
  // const resData = await response.json();
  const idParams = params.id;
  const response = await fetch('http://localhost:8080/api/items/' + idParams);
  const resData = await response.json();

  return resData.data;
}