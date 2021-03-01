import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const cart = props.cart;
    let totalCost = 0;
    let playerNames = [];

    for (let i = 0; i < cart.length; i++) {
        const eachPlayer = cart[i];
        totalCost = totalCost + parseInt(eachPlayer.demandValue);
        playerNames = playerNames + '  ' + eachPlayer.name + ',';
    }
    
    const teamMembers = () => {
        alert(playerNames)
    }
    return (
        <div className="cart-style">

            <h2>Players Cart</h2>
            <p>Total Members: {cart.length}</p>
            <p>Draft Budget Cost: $ {totalCost}</p>
            <button className="btn btn-info" onClick={teamMembers}><FontAwesomeIcon icon={faEye} />  See Your Team</button>
        </div>
    );
};

export default Cart;