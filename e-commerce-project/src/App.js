import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

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
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
        </div>
      );
    }
}

//dispatch is passing through an action object that is going to every producer
//this makes our user action a function that gets the user but returns an action object
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

//null as the first argument because we don't need any state of props from our reducer
export default connect(null, mapDispatchToProps)(App);