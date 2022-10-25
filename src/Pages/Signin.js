import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

import './Signin.css'

const Signin = () => {
    const[error, setError] = useState(null);
    const {createUser} = useContext(AuthContext)

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // Error displaying
        if(password.length < 6){
            setError("please give at least 6 characters")
            return;
        }
        if(password !== confirm){
            setError("You have entered wrong password")
            return;
        }
        // Creating user
        createUser(email, password)
        .then(res => {
            const user = res.user;
            form.reset()
            console.log(user);
        })
        .catch(err =>{
            const msg = err.message;
        } )
    }
    return (
        <div className='form-container'>
        <h3 className='form-title'>Sign In</h3>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required id="" />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required id="" />
            </div>
            <div className="form-control">
                <label htmlFor="password">Confirm password</label>
                <input type="password" name="confirm" required id="" />
            </div>
            <input className='btn-submit' type="submit" value="Sign in" />
        </form>
        <p className='err-text'>{error}</p>
        <p>All ready have an account?<Link to='/login'>Login</Link></p>
    </div>
    );
};

export default Signin;