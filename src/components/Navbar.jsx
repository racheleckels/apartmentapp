import { useState } from 'react';
import '../styles/navbar.css';
import gsLogo from '../assets/GS_original.png';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <a className="navbar-brand" href="#">
                <img src={gsLogo} alt="Georgetown Square" className="navbar-logo" />
            </a>
            <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                <span /><span /><span />
            </button>
            <div className={`navbar-links${open ? ' navbar-links--open' : ''}`}>
                <a className="navbar-link" href="#" onClick={() => setOpen(false)}>Home</a>
                <a className="navbar-link" href="#image-reel" onClick={() => setOpen(false)}>View Units</a>
                <a className="navbar-link" href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
