import { Navigate, Outlet } from "react-router-dom";

import useIsLogin from '../../hooks/useIsLogin';


const PrivateRoute = () =>{
    const isLoggedIn = useIsLogin();

    if(!isLoggedIn ){
        return <Navigate to='/register'/>
    }
    return <Outlet/>
  
};
export default PrivateRoute;