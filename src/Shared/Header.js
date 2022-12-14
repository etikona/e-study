import { MoonIcon, SunIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { AuthContext } from '../contexts/UserContext';
import './Header.css';
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDarkMode, setDarkMode] = useState(false);


  //  Theme Implement
  const toggleDarkMode = (checked) => {
    if (checked) {

      setDarkMode(true);
    }
    if (!checked) {
      setDarkMode(false)
    }
  };

  // User Log out
  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.error(error))
  }



  // console.log(user, 'I get the user');
  return (
    <div>
      <div className="navbar bg-slate-400 text-gray-50 font-bold"><font></font>
        <div className="navbar-start"><font></font>
          <div className="dropdown"><font></font>
            <label tabIndex={0} className="btn btn-ghost  lg:hidden"><font></font>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg><font></font>
            </label><font></font>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><font></font>
              <li> <Link to='/'>Home</Link> </li><font></font>
              <li> <Link to='/courses'> Courses</Link> </li><font></font>
              <li> <Link to='/faq'>FAQ</Link> </li><font></font>
              <li> <Link to='/blog'>Blog</Link> </li><font></font>
              {
                user?.uid ? <>
                  <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                  <li variant="light" onClick={handleLogout}>Log out</li><font></font>
                </> :
                  <div><li> <Link to='/register'>Register</Link> </li><font></font>
                    <li> <Link to='/login'>Log in</Link> </li><font></font></div>
              }

            </ul><font></font>
          </div><font></font>
          <a className="btn btn-ghost normal-case text-xl">E-study</a><font></font>
        </div><font></font>
        <div className="navbar-center hidden lg:flex"><font></font>
          <ul className="menu menu-horizontal p-0"><font></font>
            <li> <Link to='/'>Home</Link> </li><font></font>
            <li> <Link to='/courses'> Courses</Link> </li><font></font>
            <li> <Link to='/faq'>FAQ</Link> </li><font></font>
            <li> <Link to='/blog'>Blog</Link> </li><font></font>
            {
              user?.uid ? <>

                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>

                <li variant="light" onClick={handleLogout}>Log out</li><font></font>
              </> :
                <><li> <Link to='/register'>Register</Link> </li><font></font>
                  <li> <Link to='/login'>Log in</Link> </li><font></font></>
            }
            <DarkModeSwitch
              style={{ width: '2rem' }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={20}
            />
          </ul><font></font>
        </div><font></font>

      </div>
    </div>
  );
};

export default Header;