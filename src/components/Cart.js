import React, { Component, useEffect, useState } from 'react'
import CartItem from './CartItem'
import '../css-files/Cart.css'
function Cart(props) {

    useEffect(()=> {

        const shoppingCart = document.querySelector('.shopping-cart')
        if (!props.display) {
            shoppingCart.classList = 'shopping-cart hidden'
        }    else {
            shoppingCart.classList = 'shopping-cart'
        }
    }, [props.display])

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        let newCartItems = []
        for (let property in props.cart) {
            if (props.cart[property].quantity > 0) {
                newCartItems.push(
                    <CartItem name={props.cart[property].name} quantity={props.cart[property].quantity} key={property} uniqid={property} removeItem={props.removeItem} />
                )
            }
        }
        setCartItems(newCartItems)

    }, [props.cart])

    //reduce the cart down
    const itemTotal = Object.keys(props.cart).reduce((previous, key) => {
        return previous + (Number(props.cart[key].price) * Number(props.cart[key].quantity))
    }, 0)


    return(
        <div className='shopping-cart hidden'>
            <button className='close button' onClick={props.handleCartButton}>Close</button>
            <h2>Your Cart</h2><span></span>
            
            <ul className='item-list'>
                Your Items:
                {cartItems}
            </ul>
            <p>Total: ${itemTotal.toFixed(2)}</p>
            <button className='checkout button'>Checkout</button>
        </div>
    )
}

export default Cart