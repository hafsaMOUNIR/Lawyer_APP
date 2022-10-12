import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar(props) {
    const isDark = props.isDark;
    return (
        <div 
        className={
            isDark
            ? 'navbar-container-dark'
            : 'navbar-container'
        }
        >
           
            <Link to='/Home'>
                <img src='/Images/logoWhite.png' className='logo-navbar' alt='logo of the web app' />
            </Link>

            <div className='nav-items'>
                <Link to='/Files' className='item'>الملفات</Link>

                <Link to='/Lawsuits' className='item'>الجلسات</Link>
            </div>
        </div>

        
    )
}

Navbar.defaultProps = {
    isDark: true
  }

export default Navbar