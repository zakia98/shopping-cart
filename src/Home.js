import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from './Shop'
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import uniqid from 'uniqid'
import Item from './components/Item';

const Home = () => {
  
  const [data, setData] = useState([])

  const [cart, setCart] = useState({});
  const [displayCart, setDisplayCart] = useState(false)

  const uniqidgen = uniqid
  const getData = async function() {
      let json = await fetch('./data.json')
      let items = await json.json()
      setData(data => items)
  }

  useEffect(() => {
      getData()
  }, [])


  useEffect(() => {
      data.map(item => {
          setCart(cart => ({
              ...cart,
              [item.id]:{quantity:0, price:item.price, name: item.name}
          }))
      })
  },[data])

  const handleInput = (e) => {
      const id = e.target.parentElement.getAttribute('uniqid')
      const inputbar = e.target.previousElementSibling
      let newcart = {...cart}
      newcart[id].quantity += Number(inputbar.value)
      setCart(cart => newcart)
  }

  const items = data.map(item => {
      return <Item item={item} key={item.id} uniqid={item.id} handleInput={handleInput}></Item>
  })

  const handleCartButton = (e) => {
    setDisplayCart(!displayCart)
  }
  
  const removeItemFromCart = (e) => {
    const id = e.target.getAttribute('uniqid')
    let newcart = {...cart};
    newcart[id].quantity = 0
    setCart(cart => newcart)
  }

  return (
    <BrowserRouter>
      <Nav handleCartButton={handleCartButton} cart={cart}></Nav>
      <Routes> 
        <Route path="/" exact element={<App />} />
        <Route path='shop' element={<Shop handleInput={handleInput} items={items} />} />
      </Routes>
      <Cart cart={cart} display={displayCart} handleCartButton={handleCartButton} removeItem={removeItemFromCart}/>
    </BrowserRouter>
  );
};

export default Home;