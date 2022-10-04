import React from 'react';
import Footer from '../../Components/Footer/Footer';
import HomeSection from '../../Components/HomeSection/HomeSection';
import Navbar from '../../Components/Navbar/Navbar';

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeSection />
            <Footer/>
        </div>
    )
}

export default Home