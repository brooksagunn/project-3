import React from 'react';
import './Bag.css';
let currentOrder
JSON.parse(localStorage.getItem("order")) ? currentOrder = JSON.parse(localStorage.getItem("order")) : currentOrder = [];
console.log(currentOrder)
export default function Bag() {
    return (
        
        <div className="title">
            <div className="order-cont">
            {currentOrder.map((obj) => {
               return( <div className="order">
                   <img src={obj.image} className="order-img" alt="" />
                <div className="product-name">{obj.name}</div>
                <p className="description">
                    {obj.description}
                </p>
                </div>
               )
            })}
            </div>
            <div className="checkout">
            
            <form action="/create-checkout-session" method="POST">
                <button type="submit" className="waves-effect waves-light btn"><i className="material-icons right"></i>Checkout</button>
            </form>
            </div>
        </div>

    );
}