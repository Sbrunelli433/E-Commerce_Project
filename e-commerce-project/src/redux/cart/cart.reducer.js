import CartActionTypes from './cart.types';


//hidden value is true because we want to hide the cart dropdown when the user first comes to the site
const INITIAL_STATE ={
    hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            default: 
            return state;
        }
};

export default cartReducer;