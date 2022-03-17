import React, { Component } from 'react';
import '../css-files/Item.css'

function Item(props) {

    return(
        <div className='item' >
            <img src={props.item.imglocation}></img>
            <p>"{props.item.name}"</p>
            <p>{props.item.itemtype}</p>
            <p>${props.item.price}</p>
            <div className='user-input' uniqid={props.uniqid}>
                <input type='number' min='1' max='10' ></input>
                <button onClick={props.handleInput}>Add to Bag</button>
            </div>
        </div>
    )
}

export default Item