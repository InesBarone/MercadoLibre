import { PropTypes } from 'prop-types';

import './ErrorComponent.scss';

function ErrorComponent({errorType}) {

    return (
        <>
            {errorType === '404' && (
                <div className='error'>
                    <p className='title'>404 - Página no encontrada</p>
                    <p>Disculpa, la página que estás buscando no se ha podido encontrar.</p>
                </div>
            )}
            {errorType === '500' && (
                <div className='error'>
                    <p className='title'>Hubo un problema</p>
                    <p>Por favor, intente recargar la página de nuevo.</p>
                </div>
            )}
            
        </>
    )
}

ErrorComponent.propTypes = {
    errorType: PropTypes.string.isRequired,
}

export default ErrorComponent
