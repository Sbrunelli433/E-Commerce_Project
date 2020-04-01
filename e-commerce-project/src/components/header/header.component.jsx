import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import{auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo }from '../../assets/crown.svg';

import'./header.styles.scss';

//functional component
/* Outer container, group of options: Shop/contact/sign-in options. 
And a logo that links to the homepage.

*/

const Header = ({currentUser}) => (
    <div className='header'>
    <Link className='logo-container' to="/">
        <Logo className='logo'/>
    </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {/*checks to see if a user is signed in.
            if user is signed in, header will display a div to sign out
            if a user is NOT signed in, header will display a link and will 
            go to the sign in page if clicked */}
            {currentUser ? (
                <div className='option' onClick={()=> auth.signOut()} >
                    SIGN OUT
                </div>
            )   :   (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
        </div>
    </div>
);

//use this to get currentUser value (null) passed in as the current user
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

 export default connect(mapStateToProps)(Header);