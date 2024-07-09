import { Outlet } from "react-router-dom";

import NavComponent from '../components/NavComponent/NavComponent';

function App() {

  return (
    <>
        <NavComponent />
        <Outlet />
    </>
  )
}

export default App;
