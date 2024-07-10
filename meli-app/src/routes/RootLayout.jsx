import { Outlet } from "react-router-dom";

import NavComponent from '../components/NavComponent/NavComponent';
import MainBackground from "../components/MainBackground/MainBackground";

function App() {

  return (
    <>
        <NavComponent />
        <MainBackground>
            <Outlet />
        </MainBackground>
    </>
  )
}

export default App;
