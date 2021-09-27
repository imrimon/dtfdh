import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    
   
    let total=0;


    for(const product of cart)
    {
        total =total+product.price;
       

    }
   

  
    return (
        <div className='cart'>
              <h3>Order Sumaary</h3>
          <h5>Total Items: {props.cart.length}</h5>
          <h5>Total Price: ${ total.toFixed(3)}</h5>
          
          <h5>{cart.map(Cart=>  <p> {Cart.name}</p>)}</h5>
          
        </div>
    );
};

export default Cart;