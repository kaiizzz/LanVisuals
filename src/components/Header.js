import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import './Header.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

function Header({ adminHash }) {
    const location = useLocation();
    const { user, logout } = useUser();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate(); 

    const isRegisterPage = location.pathname.startsWith('/register');
    // const logoSrc = isRegisterPage
    //     ? 'https://d2glwx35mhbfwf.cloudfront.net/v4.10.0/logo-with-padding.svg'
    //     : '/image/LogoBlack.png';

    const headerClass = isRegisterPage ? 'header-register' : 'header';
    const titleClass = isRegisterPage ? 'register-text-title' : 'text-title';

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // State to control the sliding menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    // Function to close dropdown after clicking a menu item
    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleLogout = () => {
        logout();
        navigate('/'); 
    };

    return (
        <header className='header'>
            <div className="header-content">
                <div className="header-logo">
                    {/* <Link to="/">
                        <img src={logoSrc} alt="Logo" />
                    </Link> */}
                    {/* <img src="/image/LogoBlack.PNG" alt="Logo" style={{ width: '100%', height: '100%' }} /> */}
                </div>
                <div className="header-title">
                    {/* <h1 className={titleClass}>LanVisuals</h1> */}
                </div>
                <div className="header-buttons">
                    <Link to="/" className="header-button">Home</Link>
                    <Link to="/Gallery" className="header-button">Gallery</Link>
                    <Link to="/About" className="header-button">About</Link>
                    <Link to="/Contact" className="header-button">Contact</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;