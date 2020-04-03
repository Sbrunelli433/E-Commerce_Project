import React from 'react';
import {connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component';

import {addItem } from '../../redux/cart/cart.actions';

import './collection-item.style.scss';
//import CollectionPreview from '../collection-preview/collection-preview.component';

//do not need state

const CollectionItem =({item, addItem}) => {
    const { name, price, imageUrl} = item;  
    return( 
        <div className='collection-item'>
            <div className='image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span className='name'> {name}</span>
                <span className='price'> {price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </CustomButton>
        </div>
    );
}

//use this to define the actual addItem prop
//function to get what we pass as the payload in as the property
//return the dispatch action on creating the addItem action
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);
