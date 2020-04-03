import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

/*use <Switch> to have more control over the code and where the user can go and if only one route
matches, it is the only thing that'll be rendered */
class  App extends React.Component {
    unsubscribeFromAuth = null
    
    /*user doesn't have to sign back in when the page refreshes or if 
    the user closes the window and comes back to the application 
    THIS IS OPENS THE SUBSCRIPTION*/
    componentDidMount(){

      const {setCurrentUser} = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            //console.log(this.state);
          });
            } else  {
              setCurrentUser(userAuth);
            }
        }
      );
    }

    /*THIS CLOSES THE SUBSCRIPTION */
    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

    render(){
      return (
        <div>
        {/*this makes the Header aware when if a user is signed in/out by passing it in as a prop */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          {/*below checks to see if a user is signed in and redirects back to the homepage if a user is signed in */}
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
        </Switch>
        </div>
      );
    }
}

//refactored to take out state and use createStructuredSelector and memoized the selector
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

//dispatch is passing through an action object that is going to every producer
//this makes our user action a function that gets the user but returns an action object
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);