import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

/* Actions can have a type value and a payload value
payload value can be anything. In this case, it is the item
we want to add to our array 
this is called in the collection-item.component.jsx to add items to the cart*/
export const addItem= item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})