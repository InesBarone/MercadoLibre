import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { formatPrice, getPriceSymbol } from '../../utils/price';

import './ProductCard.scss';

function ProductCard({id, picture, price_amount, price_decimal, title, free_shipping, address, currency}) {

    console.log(currency);

    return (
        <Link to={"/items/" + id}>
            <li className='cards-li'>
                <div className='cards-content'>
                    <div className='cards-image-container'>
                        <img src={picture} alt='Imagen' />
                    </div>
                    <div className='cards-main-info'>
                        <div>
                            <span className='price'><span className='price-symbol'>{getPriceSymbol(currency)}</span>{formatPrice(price_amount)}<span className='price-decimals'>{price_decimal}</span></span>
                            {free_shipping?<img src='/src/assets/ic_shipping.png'/>: ''}
                            <span className='location'>{address}</span>
                        </div>
                        <span className='cards-title'>{title}</span>
                    </div>
                </div>
            </li>
        </Link>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price_amount: PropTypes.string.isRequired,
    price_decimal: PropTypes.string,
    title: PropTypes.string.isRequired, 
    free_shipping: PropTypes.bool.isRequired,
    address: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default ProductCard