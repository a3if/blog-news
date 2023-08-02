import React, { useContext } from 'react';
import { Route} from 'react-router-dom';
import {  useAuth } from '../context/authenticationContext';
import Form from '../components/Form';
export const ProtectedRoute=({ component: Component, ...rest })=>{
    const { isLoggedIn } = useAuth();
    console.log('islog',isLoggedIn)
    return(
        <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? <Component {...props} /> : <Form/>
        }
      />
    )
}
