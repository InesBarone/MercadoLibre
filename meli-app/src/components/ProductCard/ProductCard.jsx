import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({id, picture, price_amount, price_decimal, price_currency, title, textButton, free_shipping}) {

    return (
        <Link to={"/items/" + id}>
            <li className='cards-li'>
                <div>
                    <div className='cards-image-container'>
                        <img src={picture} alt='Imagen' />
                    </div>
                    <div className='cards-main-info'>
                        <div>
                            <span>{price_currency}$ {price_amount}</span>
                            {free_shipping?<img src='/src/assets/ic_shipping.png'/>: ''}
                            <button>{textButton}</button>
                        </div>
                        <span>{title}</span>
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ProductCard