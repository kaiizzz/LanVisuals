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

    // Scroll to the top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <header className='header'>
            
            <div className="header-logo">
                        <img src="/image/LogoBlack.PNG" alt="Logo" style={{ width: '5%', height: '5%' }} />
                </div>
            <div className="header-content">
                
                <div className="header-buttons">
                    <Link to="/" className="header-button" onClick={scrollToTop}>Home</Link>
                    
                    <Link to="/Gallery" className="header-button" onClick={scrollToTop}>Gallery</Link>
                    
                    <Link to="/About" className="header-button" onClick={scrollToTop}>About</Link>
                    
                    <Link to="/Contact" className="header-button" onClick={scrollToTop}>Contact</Link>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;