import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

import './Signin.css'

const Signin = () => {
    const[error, setError] = useState(null);
    const {createUser, updateUserProfile} = useContext(AuthContext)

    // Submit form
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(name, photoURL, email, password, confirm);
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
            handleProfile(name, photoURL)
            
            form.reset();
           
        })
        .catch(err =>{
            const msg = err.message;
        } )
    };

    //  Handle user profile
    const handleProfile =(name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(err => console.error(err))
    }
    return (
    <div className='bg-slate-200 p-5'>
            <div className='form-container bg-slate-200'>
        <h3 className='form-title'>Sign In</h3>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required id="" />
            </div>
        <div className="form-control">
                <label htmlFor="photoURL">Photo URL</label>
                <input type="text" name="photoURL" required id="" />
            </div>
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
    </div>
    );
};

export default Signin;