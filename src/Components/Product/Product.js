import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faTwitter  } from '@fortawesome/free-brands-svg-icons';
 import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
 
import './Product.css';


const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
     const element2 = <FontAwesomeIcon icon={faTwitter} />;
     const element3 = <FontAwesomeIcon icon={faFacebook} />;
     <FontAwesomeIcon icon="check-square" />

const {name ,marital,country,price, img ,age,facebook ,youtube}=props.product;
    return (
        <div className='product'>
             <img src={img} alt="" /> 
        <div>
        <h4 >{name}</h4>
        <h5>Age: {age}</h5>
        <p>Price: ${price}</p>
        <p>Marital Status:{marital}</p>
        <p>Country:{country}</p>
          <button ><a href={facebook}>{element2} </a></button>
        <button ><a href={youtube}>{element3} </a></button>  
        <br />
         <button onClick={()=>props.handleAddtoCart(props.product)} className='purchaseButton'>{element}Purchase</button> 
        </div>
       
          
        </div>
    );
};

export default Product;