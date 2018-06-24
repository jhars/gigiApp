// import React from 'react';
// import { StyleSheet, Text, View, Switch, Image, TextInput, ScrollView, Button, TouchableOpacity, Picker, Slider, FlatList, SectionList, Platform} from 'react-native';
// import { StackNavigator } from 'react-navigation';
//
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() =>
//           navigate('Profile', { name: 'Jane' })
//         }
//       />
//     );
//   }
// }
//
// class ProfileScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Profile',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Home"
//         onPress={() =>
//           navigate('Home', { name: 'Jane' })
//         }
//       />
//     );
//   }
// }
//
// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });
//
// export default App;
