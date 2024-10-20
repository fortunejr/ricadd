import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import "../styles/Nav.css"

const Nav = () => { 
    const [open, setOpen] = useState(false)
    const handleLinkClick = () => {
        setOpen(false);
      };

    return (
        <nav className="Nav">
            <Link to="/"><img className='logo-img' src="/images/ricaddlogo.png" alt="Logo" /></Link>

            <div className='name'></div>

            {/* Hamburger menu visible only on mobile */}
            <div className="hamburger-menu">
                <Hamburger
                    size={24}
                    toggled={open}
                    toggle={setOpen}
                />
            </div>

            {/* Inline nav for desktop/tablet screens */}
            <div className='inline-nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/packages">Packages</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li className='book' onClick={handleLinkClick}><a href="https://api.whatsapp.com/send?phone=2349051334135" target="_blank" rel="noopener noreferrer">Book an Appointment</a></li>
                </ul>
            </div>

            {/* Dropdown nav for mobile when hamburger is toggled */}
            {open && <div className='nav-ul'>
                <ul>
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/services" onClick={handleLinkClick}>Our Services</Link></li>
                    <li><Link to="/packages" onClick={handleLinkClick}>Packages</Link></li>
                    <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
                    <li className='book2' onClick={handleLinkClick}><a href="https://api.whatsapp.com/send?phone=2349051334135" target="_blank" rel="noopener noreferrer">Book an Appointment</a></li>
                </ul>
            </div>}
        </nav>
    )
}

export default Nav
