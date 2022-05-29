import { Navigate, useLocation } from "react-router";
import store from "../Store";


function RequireAuth({children }) {
    let location = useLocation();
    const state = store.getState(state => state.user.authToken);    
    const authToken = state.user.authToken;
  
    if (!authToken) {
      return <Navigate to="/Login" state={{ from: location }} replace />;
    }
    return children;
  }

  export default RequireAuth;