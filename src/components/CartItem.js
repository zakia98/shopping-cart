import React, {Component, useEffect} from 'react';

function CartItem(props) {


    return(
        <li className='list-item'>"{props.name}" ({props.quantity}) 
        <button className='delete button' uniqid={props.uniqid} onClick={props.removeItem}>Delete</button>
        </li>
    )
    
}

export default CartItem