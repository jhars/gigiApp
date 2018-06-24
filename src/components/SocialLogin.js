import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { LoginManager } from 'react-native-fbsdk';
import FBLoginButton from './FacebookLogin';

// const FBSDK = require('react-native-fbsdk');
// const { LoginManager } = FBSDK;

class SocialLogin extends Component {

  // const FBSDK = require('react-native-fbsdk');
  // const {
  //   LoginManager,
  // } = FBSDK;

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
  //
  // }

    render() {
    return (
      <View>
        <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
        // <FBLoginButton />
      </View>
    );
  }

}

// //================================================================//
const styles = StyleSheet.create({
  facebook: {
      padding: 50,
      marginTop: 75
  },
  label: {
    padding: 50,
    marginTop: 75
  }
});



export default SocialLogin;


//#####################################################################//
//#####################################################################//
//#####################################################################//
// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, View} from 'react-native';
// import { Container, Content, Header, Form, Input, Item, Button, Label, Thumbnail} from 'native-base';
// // import LinkedInModal from 'react-native-linkedin';
//
//
// export default class SocialLogin extends React.Component {
//
//   async loginWithFacebook() {
//     const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync('1785738094839350', { permissions: ['public_profile'] })
//     if(type == 'success') {
//       const credential = firebase.auth.FacebookAuthProvider.credential(token)
//
//       console.log('Before firebase AUTH');
//
//       firebase.auth().signInWithCredential(credential).catch((error) => {
//         console.log(error )
//       })
//       console.log('After firebase AUTH');
//     }
//   }
//
//   constructor(props){
//     super(props);
//     this.state = {
//       name: 'Gilligan',
//       showName: true,
//       message: this.props.message
//     }
//   }
//
//   render() {
//     return(
//
//         <Form>
//             <Button style={styles.facebook}
//                 full
//                 rounded
//                 primary
//                 onPress={() => this.loginWithFacebook()}
//             >
//                 <Text style={{ color: 'white' }}> Login with Facebook</Text>
//             </Button>
//         </Form>
//
//
//     );
//   }
// }
//
// class ContactInfo extends React.Component {
//   static navigationOptions = {
//     title: 'Contact & Location',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         // title="Go to Home"
//         // onPress={() =>
//         //   navigate('Home', { name: 'Jane' })
//         // }
//       />
//     );
//   }
// }
//

//
// AppRegistry.registerComponent('gigi-native-app', () => App);
