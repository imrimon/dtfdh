import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
   const [cart , setCart]=useState([]);
        const handleAddtoCart= (product)=>{
          
            const newCart= [...cart, product]
            setCart(newCart);
           
        }
    return (
        
             <div className="container">
            <div className="product-container">
               
               
               {
                  
                products.map(product=><Product key={product.id}product={product} handleAddtoCart={handleAddtoCart}></Product>)
               }
              
            </div>
            <div className="cart-container">
         
<Cart cart ={cart} key={products.id}></Cart>
            </div>
            
        </div>
        
    );
};

export default Shop;