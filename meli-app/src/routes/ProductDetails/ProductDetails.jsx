import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

import { formatPrice, getPriceSymbol } from '../../utils/price';

import './ProductDetails.scss';

function ProductDetails() {
  const productData = useLoaderData();

  return (
    <>
      {productData === null? <ErrorComponent errorType={'500'}/>:
      <>
        {productData.status && productData.status != '200'? <ErrorComponent errorType='404'></ErrorComponent>:
          <>
            <Breadcrumb category={productData.item.category}/>
            <div className='product-details-container'>
              <div className='product-details-main'>
                <div className='product-details-image-container'>
                  <img src={productData.item.picture} alt="Imagen de producto"/>
                </div>
                <div className='product-details-info'>
                  <div>
                    <span className='product-details-type'>{productData.item.condition === 'new'? "Nuevo - ": ""}{"Total disponibles: " + productData.item.initial_quantity}</span>
                    <h2 className='product-details-title'>{productData.item.title}</h2>
                  </div>
                  <span className='product-details-price'><span className='price-symbol'>{getPriceSymbol(productData.item.price.currency)}</span>{formatPrice(productData.item.price.amount)}<span className='price-decimals'>{productData.item.price.decimals?productData.item.price.decimals: ""}</span></span>
                  <button className='product-details-but'>Comprar</button>
                </div>
              </div>
              <div className='product-details-description'>
                <span>Descripción del producto</span>
                <p>
                  {productData.item.description? 
                    productData.item.description.split('\n').map((linea, index) => {
                      return <React.Fragment key={index}>{linea}<br/></React.Fragment>;
                    }): "No hay ninguna descripcion para este producto."}</p>
              </div>
            </div>
          </>
          }
        </>
      }
    </>
  );
}

export default ProductDetails;

export async function loader({params}) {
  const idParams = params.id;
  let response;
  
  try {
    response = await fetch('http://localhost:8080/api/items/' + idParams);
    if (response.status != 200) {
      console.log(response.status);
      return {status: response.status};
    }
    const resData = await response.json();
    return resData.data;

  } catch (error) {
    return null;
  }
}