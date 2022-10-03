import React from 'react';
import './homeSection.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function HomeSection() {

    
    return (
        <div className='HomeSection-container'>
            <img src='/Images/Home.jpg' className='img' />
            <div className='home-items' >
                <div className='Search-box'>
                    <button><FaSearch /></button>
                    <input
                        className='searchInput'
                        type='search'
                        name='search'
                        placeholder='بحث ...'
                        dir='rtl'
                        lang='ar'
                    />
                </div>

                <Link to='/Files'><button type='button' className='addFile-btn'>إضافة ملف جديد</button></Link>
            </div>

        </div>
    )
}

export default HomeSection