import React from 'react';
import ReactDOM from 'react-dom';
import './Bag.css';


export default function Bag() {
    return (
        
        <div className="title">
        <button class="waves-effect waves-light btn"><i class="material-icons right"></i>Checkout</button>
        </div>

        
    );
}





ReactDOM.render(<Bag />, document.getElementById('root'));