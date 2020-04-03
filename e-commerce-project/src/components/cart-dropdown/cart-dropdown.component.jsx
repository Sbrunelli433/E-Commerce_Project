import React from 'react';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {createStructuredSelector} from 'reselect';

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

//refactored to take out state and use createStructuredSelector and memoized the selector
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});
 export default connect(mapStateToProps)(CartDropdown);