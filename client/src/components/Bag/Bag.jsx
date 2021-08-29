import React from 'react';
import ReactDOM from 'react-dom';
import './Bag.css';


export default function Bag() {
    return (
        
        <div className="title">
            <form action="/create-checkout-session" method="POST">
                <button type="submit" class="waves-effect waves-light btn"><i class="material-icons right"></i>Checkout</button>
            </form>
        </div>

        
    );
}





ReactDOM.render(<Bag />, document.getElementById('root'));