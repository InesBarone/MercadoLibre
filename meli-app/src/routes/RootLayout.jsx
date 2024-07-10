import { Outlet, useNavigation } from "react-router-dom";

import NavComponent from '../components/NavComponent/NavComponent';
import MainBackground from "../components/MainBackground/MainBackground";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";

function App() {
  const navigation = useNavigation();

  return (
    <>
        <NavComponent />
        <MainBackground>
            {navigation.state == 'loading'?<LoadingComponent/>: <Outlet />}
        </MainBackground>
    </>
  )
}

export default App;
