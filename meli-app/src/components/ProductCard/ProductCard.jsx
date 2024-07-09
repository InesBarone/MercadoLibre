import './ProductCard.css';

function ProductCard({image, price, description, textButton, shipping}) {

    return (
        <li className='cards-li'>
            <div>
                <div className='cards-image-container'>
                    <img src={image} alt='Imagen' />
                </div>
                <div className='cards-main-info'>
                    <div>
                        <span>$ {price}</span>
                        {shipping?<img src='/src/assets/ic_shipping.png'/>: ''}
                        <button>{textButton}</button>
                    </div>
                    <span>{description}</span>
                </div>
            </div>
        </li>
    )
}

export default ProductCard