import { useLoaderData } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './Breadcrumb.scss';

function Breadcrumb({category}) {
    if (!category) {
        const data = useLoaderData();
        
        if (data != null & !data.status && data.categories && data.categories.length > 0) {
            category = data.categories[0];
        } else {
            category = '';
        }
    }

    return (
        <>
            <div className='breadcrumb'>
                <p>{category}</p>
            </div>
        </>
    )
}

Breadcrumb.propTypes = {
    category: PropTypes.string
}

export default Breadcrumb

