import React from 'react';
import './Bag.css';
let currentOrder
JSON.parse(localStorage.getItem("order")) ? currentOrder = JSON.parse(localStorage.getItem("order")) : currentOrder = [];


export default function Bag() {
    return (

        <div className="title">
            <div className="order-cont">
            <table className="table-parent">
<tbody>
            {currentOrder.map((obj) => {
               return( <div className="order">
                <tr>
            <td className="obj-table">{obj.name}</td>
            <td className="obj-table">{obj.description}</td>
            <td className="obj-table">{obj.price}</td>
          </tr>
                </div>
               )
            })}
            </tbody>
      </table>
            </div>
            <div className="checkout">
            <form action="/create-checkout-session" method="POST">
                <button type="submit" id="checkout-button" className="waves-effect waves-light btn"><i className="material-icons right"></i>Checkout</button>
            </form>
        </div>
            </div>

    );
}