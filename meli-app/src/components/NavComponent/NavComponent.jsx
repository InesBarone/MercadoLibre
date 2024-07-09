import './NavComponent.css';
import logo from '../../assets/logo-mini.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavComponent() {

  return (
    <>
      <div className="nav">
        <div>
          <img src={logo} alt="Logo" />
          <form method="get" id="buscarform">
                <input className="navbar" type="text" id="s" placeholder="Buscar" />
                <button className="navButton" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NavComponent
