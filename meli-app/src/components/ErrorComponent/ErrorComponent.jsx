import './ErrorComponent.css';

function ErrorComponent() {

    return (
        <>
            <div className='not-found'>
                <p className='title'>404 - Página no encontrada</p>
                <p>Disculpa, la página que estás buscando no se ha podido encontrar.</p>
            </div>
        </>
    )
}

export default ErrorComponent
