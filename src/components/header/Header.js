import React from 'react';
import './header.css';

const Header = () => {
    return ( 
        <header className='header'>
            <nav className='header-nav'>
            <a href='#'>Home</a>
            <a href='#'>Blog</a>
            <a href='#'>Contact</a>
            </nav>

            <div className='social-links'>
                Follow Me
            </div>
        </header>
     );
}
 
export default Header;