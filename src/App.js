import React, { Component } from 'react';
import { View, Text } from 'react-native';
//above any import statemtn for stuff that we write (i.e. explicit/custom file path imports)
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';
// import Social from './components/SocialLogin';
// import { LoginManager } from 'react-native-fbsdk';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyAjUQFnbrC2PI1z97sftXRX06ce2_WBKcM',
    //   authDomain: 'authentication-5052c.firebaseapp.com',
    //   databaseURL: 'https://authentication-5052c.firebaseio.com',
    //   projectId: 'authentication-5052c',
    //   storageBucket: 'authentication-5052c.appspot.com',
    //   messagingSenderId: '623969335029'
    // });

    firebase.initializeApp({
      apiKey: "AIzaSyClef4i6edmDEjYHNcvCOholiNhoAx8jOo",
      authDomain: "gigi-native-app.firebaseapp.com",
      databaseURL: "https://gigi-native-app.firebaseio.com",
      projectId: "gigi-native-app",
      storageBucket: "gigi-native-app.appspot.com",
      messagingSenderId: "300919797935"
    });



    // ...

    // Attempt a login using the Facebook login dialog,
    // asking for default permissions.
    // LoginManager.logInWithReadPermissions(['public_profile']).then(
    //   function(result) {
    //     if (result.isCancelled) {
    //       alert('Login was cancelled');
    //     } else {
    //       alert('Login was successful with permissions: '
    //         + result.grantedPermissions.toString());
    //     }
    //   },
    //   function(error) {
    //     alert('Login failed with error: ' + error);
    //   }
    // );


    //onAuthStateChanged => is an Event Handler that "Accepts" a function
    //below METHOD
    //CALLED with single argument: ('user' object) -- fatArrowFunction
    // (user) lets us
    //when auth state changes,
      //if user signed i
    //if singed out will be null or undefined, { depth: null }));
    //we can look at this argument to decide whether or not a user has signed out
    //then DO...
    //CONDTIONALLY SHOW some JSX On The Device
    //SOlved by using Component-Level State
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
            </CardSection>
          </Card>

        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}

export default App;
// AppRegistry.registerComponent('auth', () => App);
