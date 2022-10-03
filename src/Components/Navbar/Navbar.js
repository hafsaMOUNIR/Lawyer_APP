import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar-container'>
            <Link to='/'>
                <img src='/Images/logoWhite.png' className='logo-navbar' alt='logo of the web app' />
            </Link>

            <div className='nav-items'>
                <Link to='/Files' className='item'>الملفات</Link>

                <Link to='/Lawsuits' className='item'>الجلسات</Link>
            </div>
        </div>
    )
}

export default Navbar