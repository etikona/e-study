import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(!user){

        return  <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    else{
        return children;
    }
  
};

export default PrivateRoute;