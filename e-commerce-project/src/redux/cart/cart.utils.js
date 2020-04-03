/*utility functions allow us to keep our files clean and organize 
functions that we may need in multiple files in one location*/
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }

    
    /*quantity property gets attached the first time 
    around since the above if statement won't run  when
    it is a new item*/
    return [...cartItems, {...cartItemToAdd, quantity:1 }];
};

/*write a remove item function
figure out if item exists in cart already 
decrease the quantity by 1 otherwise decrease the quantity*/

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    //figure out if item exists in cart already
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    //takes existing cart item 
    if (existingCartItem.quantity === 1){
        //return filtered cartItems by id and removes that cartItem.id if it does NOT match our cartItemToRemove.id
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //
    return cartItems.map(
        
        cartItem => 
        //if it is the same one called by cartItemToRemove.id 
        cartItem.id === cartItemToRemove.id ? 
        //return new object, spread in the cartItem props and decrease the quantity by 1
        {...cartItem, quantity: cartItem.quantity - 1}
        //otherwise return just the remaining cart item
        : cartItem
    )
}