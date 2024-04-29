// Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
            <div className="container">
                <a className='navbar-brand logo' href='index_1.html'>
                    <h1 style={{ color: '#fff' }}>ZGAMER</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu" style={{ color: '#fff' }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a href="#" className="nav-link" style={{ color: '#fff' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ color: '#fff' }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ color: '#fff' }}>Categories</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ color: '#fff' }}>Cart</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ color: '#fff' }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
