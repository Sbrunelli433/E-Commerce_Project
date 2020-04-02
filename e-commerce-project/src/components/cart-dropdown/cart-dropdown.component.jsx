import React from 'react';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'

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

//brings in state and selectCartItems to avoid re-rendering the page and keep the cart full when user signs out
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
 export default connect(mapStateToProps)(CartDropdown);