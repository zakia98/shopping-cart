import React, { Component } from 'react';
import '../css-files/Nav.css'

function Nav() {
    return(
        <nav className='nav-bar'>
            <h1>ニッポンポスター</h1>
            <ul className='nav-buttons'>
                <li className='nav-link'>
                    Home
                </li>
                <li className='nav-link'>
                    Shop
                </li>
                <li className='nav-link'>
                    Cart
                </li>
            </ul>
        </nav>
        

    ) 
}

export default Nav