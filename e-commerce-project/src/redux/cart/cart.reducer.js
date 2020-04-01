import CartActionTypes from './cart.types';

//hidden value is true because we want to hide the cart dropdown when the user first comes to the site
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                /*BELOW: spreading in all array values, adding additional values will appear at the
                end of this array following the spread values from existing array*/
                cartItems:[...state.cartItems, action.payload]
            }
            default: 
                return state;
        }
    };

export default cartReducer;