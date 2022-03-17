import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css-files/Nav.css'

function Nav(props) {
    
    const quantityTotal = Object.keys(props.cart).reduce((previous, key) => {
        return previous + Number(props.cart[key].quantity)
    }, 0)

    return(
        <nav className='nav-bar sticky'>
            <h1>ニッポンポスターズ</h1>
            <ul className='nav-buttons'>
                <li className='nav-link'>
                    <Link to='/'>HOME</Link>
                </li>
                <li className='nav-link'>
                    <Link to='/shop'>SHOP</Link>
                </li>
                <li className='nav-link' onClick={props.handleCartButton}>
                    CART ({quantityTotal})
                </li>
            </ul>
        </nav>
        

    ) 
}

export default Nav