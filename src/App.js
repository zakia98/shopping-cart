import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './css-files/App.css'
import chevronleft from './images/chevrons-left.svg'
import chevronright from './images/chevrons-right.svg'

function App() {
    return(
        <div className='home'>
            <div className='title'>ニッポンポスターズ</div>
            <p className='tagline'>
                Your portal to Japan awaits. <br/>
            </p>
            <div className='goToShop'>
                <img src={chevronright} alt='right-chevron' className='chevron right'></img>
                <Link to='/shopping-cart/shop' className='shop-button'>VISIT THE SHOP</Link>
                <img src={chevronleft} alt='left-chevron' className='chevron left'></img>
            </div>
        </div>
    )
}

export default App