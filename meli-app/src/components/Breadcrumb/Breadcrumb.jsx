import { useLoaderData } from 'react-router-dom';
import './Breadcrumb.css';

function Breadcrumb({category}) {
    const data = useLoaderData();

    return (
        <>
            <div className='breadcrumb'>
                <p>{category? category: data.categories && data.categories.length > 0?data.categories[0]: "No hay categorías disponibles"}</p>
            </div>
        </>
    )
}

export default Breadcrumb
