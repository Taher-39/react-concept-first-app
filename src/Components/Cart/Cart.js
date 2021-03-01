import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    let totalCost = 0;
    let playerNames = [];
    for (let i = 0; i < cart.length; i++) {
        const eachPlayer = cart[i];
        totalCost = totalCost + parseInt(eachPlayer.demandValue);
        playerNames = playerNames + ' ' + eachPlayer.name;
    }
    return (
        <div className="cart-style">
            <h2>Total Team Member: {cart.length}</h2>
            <h3>Taem Member Names: [{playerNames}]</h3>
            <h3>Player Draft Budget: {totalCost}</h3>
        </div>
    );
};

export default Cart;