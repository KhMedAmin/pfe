import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './components/css/animate.min.css';

import './components/css/style.css';
const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
