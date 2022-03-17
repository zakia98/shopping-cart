import React, { Component, useEffect, useState } from 'react';
import './css-files/Shop.css'
import Item from '../src/components/Item'
import uniqid from 'uniqid'
import Cart from './components/Cart';

function Shop(props) {    

    return(
        <div className='shop-container'>
            <div className='content'>
                <div className='header'>
                    <h3>浮世</h3>
                    <p>[u-key-yo] <em>Japanese</em></p>
                    <p>"The Floating World"</p>
                    <p>Living in the moment, detached from the troubles of life</p>
                </div>
                <h2 id='shop-title'>Shop || Collection</h2>
                <div className='items-container'>
                    {props.items}
                </div>
                
            </div>
        </div>
    )
}

export default Shop