import React from 'react';
import ReactDOM from 'react-dom';
import './Bag.css';


export default function Bag() {
    return (
        
        <div className="title">
        <button className="waves-effect waves-light btn"><i className="material-icons right"></i>Add to Bag</button>
        </div>

        
    );
}





ReactDOM.render(<Bag />, document.getElementById('root'));