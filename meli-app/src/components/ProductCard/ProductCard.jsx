import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({id, picture, price_amount, price_decimal, price_currency, title, free_shipping, address}) {

    return (
        <Link to={"/items/" + id}>
            <li className='cards-li'>
                <div>
                    <div className='cards-image-container'>
                        <img src={picture} alt='Imagen' />
                    </div>
                    <div className='cards-main-info'>
                        <div>
                            <span className='price'>{price_currency}$ {price_amount}</span>
                            {free_shipping?<img src='/src/assets/ic_shipping.png'/>: ''}
                            <span className='location'>{address}</span>
                        </div>
                        <span>{title}</span>
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ProductCard