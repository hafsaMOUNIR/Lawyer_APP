import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>

            <Link to='/Home' className='logo'>
                <img src='/Images/logoWhite.png' className='logo-footer' alt='logo of the web app' />
            </Link>

            <div className='footer-items'>
                <Link to='/Archive' className='item'>الأرشيف</Link>
                <Link to='/Schedule' className='item'>جدول الأعمال</Link>
                <button type='button' className='footer-btn'>تسجيل الخروج</button>
            </div>
        </div>
    )
}

export default Footer