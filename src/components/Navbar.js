import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
            <div className="container">
                <h1 ><Link to="/"style={{ color: '#ffffff' }}>ZGAMER</Link></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu" style={{ color: '#fff' }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" style={{ color: '#fff' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categories" className="nav-link" style={{ color: '#fff' }}>Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" style={{ color: '#fff' }}>About</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link" style={{ color: '#fff' }}>Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" style={{ color: '#fff' }}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
