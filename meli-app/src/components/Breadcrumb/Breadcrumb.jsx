import React from 'react';

import { useLoaderData } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './Breadcrumb.scss';

function Breadcrumb({categories}) {
    let categoriesComponent = null;

    if (!categories) {
        const data = useLoaderData();
        
        if (data && data.categories && data.categories.length > 0) {
            categoriesComponent = (
                <p>{data.categories[0]}</p>
            );
        } 
    } else {
        categoriesComponent = categories.map((category, index) => (
            <React.Fragment key={index}>
                {index !== 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
                    </svg>
                )}
                <p>{category}</p>
            </React.Fragment>
        ));
    }

    return (
        <>
            <div className='breadcrumb'>
                <div className='categories'>{categoriesComponent}</div>
            </div>
        </>
    )
}

Breadcrumb.propTypes = {
    category: PropTypes.array
}

export default Breadcrumb

