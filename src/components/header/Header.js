import React from 'react';

const Header = () => {
    return ( 
        <header className='header'>
            <nav className='header-nav'>
            <a href='#'>Home</a>
            <a href='#'>Projects</a>
            <a href='#'>Contact</a>
            </nav>

            <div className='social-links'>
                Follow Me
            </div>
        </header>
     );
}
 
export default Header;