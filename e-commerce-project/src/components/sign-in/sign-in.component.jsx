import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';

import CustomButton from '../custom-button/custom-button.component.jsx';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

//class component to store information
//write this to be reusable!
//add functionality as it is required! Not all at once!

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password:''
        };
    }


    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    };

    
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value});
    };

    //have both 
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label="email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required
                    /> 
                    {/*below has both input and CustomButton to show the progression of the code
                    and how the I was able to create both and trigger the onSubmit method */}
                   <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SignIn;