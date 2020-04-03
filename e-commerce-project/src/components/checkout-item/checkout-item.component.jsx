import React from 'react';

import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

//functional component
const CheckoutItem = ({cartItem, clearItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    //explicitly return the divs and spans with the destructured values above
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl}alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        {/*remove button has onClick function with anon function that will call clearItem function that is
        passed in as a prop and is passing in the cartItem. Similar to addItem functionality*/}
        <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div>
        
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
    null,
    mapDispatchToProps
    )(CheckoutItem);