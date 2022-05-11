# shopping-cart
# shopping-cart

[Live Link](https://zakia98.github.io/shopping-cart/)

![product demo](./shopping-cart-demo.50380db0236e0b2de102.gif)
 ## Aim: 
Create a React-based mock shopping cart website for a Japanese poster company, which uses hooks for state management. 
 
 ## Installation 
 ```bash
git clone git@github.com:zakia98/shopping-cart.git
cd shopping-cart
npm install
npm run build
```
Then it is possible to host the website on your preferred hosting platform.

### Setup
Users will need to input the data for the posters that they wish to display in `/public/data.json`, in order for their items to show. 
Alternatively, a different API can be used, however the `getData()` function on `line 19` in `Home.js` must be altered with the correct link. Data must be returned to the application in this format: 

```json
[
    {
        "name":"Oishii Ramen",
        "imglocation":"./images/poster1.png",
        "itemtype":"poster",
        "price":"19.99",
        "id":"0001"
    },
]
```

## Features
- Users can add items to their carts
- Users can input the number they wish to purchase
- Remove items from the cart

## Technologies
- React
- NPM
- create-react-app
- React Router


## Reflections

### Further improvements
- Add a function with allows users to increment the number they wish to purchase
- Set the base number of the input field to 1, so that users only need to click the `add to cart button` as in most cases users will only to add 1 item to their cart.
- Add visual confirmation that an item has been added to the cart.
