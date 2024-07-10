import { useLoaderData } from 'react-router-dom';
import './Breadcrumb.css';

function Breadcrumb() {
    const data = useLoaderData();

    return (
        <>
            <div className='breadcrumb'>
                <p>{data.categories?data.categories[0]: "Por ahora nada"}</p>
            </div>
        </>
    )
}

export default Breadcrumb
