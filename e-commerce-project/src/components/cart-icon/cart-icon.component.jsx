import React from 'react';
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import './cart-icon.styles.scss';

const CartIcon=({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//below adds the total quantity of items in the cart and displays them in the cart-icon in the header
//this relies on redux/cart.selectors.js
//refactored to take out state and use createStructuredSelector and memoized the selector
const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);