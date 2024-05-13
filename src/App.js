import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ShopPage from './components/ShopPage';
import './components/css/animate.min.css';
import { Routes, Route } from 'react-router-dom';
import './components/css/style.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <div >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/ShopPage' element={<ShopPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
