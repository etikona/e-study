import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

import './Login.css'
const Login = () => {
    const [error, setError] = useState(null);
    const{userLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // Error displaying
        if(password.length < 6){
            setError("You are given wrong password!")
            return;
        }
      
        // Creating user
        userLogIn(email, password)
        .then(res => {
            const user = res.user;
            form.reset()
            navigate(from, {replace: true});
        })
        .catch(err =>{
            const msg = err.message;
        } )
    }

    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='err-text'>{error}</p>
            <p><Link to='/register'>create a new account</Link></p>
        </div>
    );
};

export default Login;