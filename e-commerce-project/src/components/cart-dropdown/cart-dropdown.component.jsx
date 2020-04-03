import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


//regular stateless component
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                //reusing cart-item component
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} /> 
                ))
                ):( 
                <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
        {/*shorthand dispatch here to hide the cart when user clicks "go to checkout" button and is sent to the checkout page*/}
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

//refactored to take out state and use createStructuredSelector and memoized the selector
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});


/*wrapping components like this evaluates them from the inside out. So we get the connect component
first and is passed through as the withRouter component argument. This gives the cart-dropdown component
access to the props we're looking for*/
 export default withRouter(connect(mapStateToProps)(CartDropdown));