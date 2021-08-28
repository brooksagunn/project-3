import React from 'react';
import ReactDOM from 'react-dom';
import './Bag.css';


export default function Bag() {
    return (
        
        <div className="title">
            <a href="/checkout"><button class="waves-effect waves-light btn"><i class="material-icons right"></i>Checkout</button></a>
        </div>

        
    );
}





ReactDOM.render(<Bag />, document.getElementById('root'));