import React from 'react';

import './custom-button.styles.scss';

//stateless functional component
//render a button component
//pass in the onSubmit method by pulling the children off the props
//destructure other prompts as otherProps 
//conditionally render a class name based off the prop using string interpolation
const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (
    //if a type='submit' is passed into this, the button will get that
    //children is what is passed in between the brackets of the component
<button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}
>
    {children}
</button>

);

export default CustomButton;