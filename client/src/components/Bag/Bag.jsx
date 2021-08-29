import React from 'react';
import './Bag.css';


export default function Bag() {
    return (
        
        <div className="title">
            <form action="/create-checkout-session" method="POST">
                <button type="submit" className="waves-effect waves-light btn"><i className="material-icons right"></i>Checkout</button>
            </form>
        </div>

        
    );
}