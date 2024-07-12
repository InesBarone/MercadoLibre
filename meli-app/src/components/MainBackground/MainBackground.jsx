import './MainBackground.scss';

function MainBackground({children}) {

  return (
    <>
      <main>
        <div className='background'>
          <div className='content'>
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default MainBackground
