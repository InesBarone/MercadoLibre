import { useState } from 'react';
import { Link } from 'react-router-dom'

import './NavComponent.scss';

import logo from '../../assets/logo-mini.png'

function NavComponent() {
  const [searchText, setSearchText] = useState('');

  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  return (
    <>
      <div className="nav">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <form method="get" id="buscarform">
                <input className="navbar" value={searchText} type="text" id="s" placeholder="Nunca dejes de buscar" onChange={handleSearchText}/>
                <Link to={`/items?search=${searchText}`}>
                  <button className="navButton" type="submit"><img src="/src/assets/ic_search.png"/></button>
                </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default NavComponent
