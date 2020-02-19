import React from 'react';
import Search from './Search.js';
import Logo from './Logo.js';
import ListButtons from './ListButtons.js';
import './StylishHat.scss';



function Header() {
    return(
        <header>
            <Logo/>
            <Search/>
            <ListButtons/>
        </header>
    )
}

export default Header;