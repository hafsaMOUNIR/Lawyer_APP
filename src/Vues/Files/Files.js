import React from 'react';
import FilesList from '../../Components/Files/FilesList';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Filter from '../../Components/Filter/Filter';
import './files.css';

function Files() {


    return (
        <div className='page-container'>
            <Navbar />
            <h1 className='pageTitle'>الملفات</h1>
            <Filter />
            <FilesList />
            <Footer />
        </div >
    )
}

export default Files