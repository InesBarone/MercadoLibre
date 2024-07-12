import BarLoader from "react-spinners/BarLoader";

import './LoadingComponent.scss';

function LoadingComponent() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    return (
        <>
            <div className='loading-container'>
                <BarLoader
                    color="gray"
                    loading={true}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </>
    )
}

export default LoadingComponent
