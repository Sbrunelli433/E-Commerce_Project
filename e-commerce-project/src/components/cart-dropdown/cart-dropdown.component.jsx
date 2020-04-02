import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


//regular stateless component
const CartDropdown = ({ cartItems }) => (

    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                //reusing cart-item component
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} /> 
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

//destructure cartItems and pass it through to mapStateToProps
const mapStateToProps = ({cart: { cartItems } }) => ({
    cartItems
});
 export default connect(mapStateToProps)(CartDropdown);