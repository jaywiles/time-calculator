// // external dependencies
// import { StatusBar } from 'expo-status-bar';
// import React, { Component } from 'react';
// import Constants from 'expo-constants';
// import { StyleSheet, Text, View } from 'react-native';
// import { Header } from 'react-native-elements';
// import '@expo/vector-icons';

// // internal dependencies

// export default class AppHeader extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header
//           leftComponent={{ icon: 'menu', color: '#fff' }}
//           centerComponent={{ text: 'Time Calculator', style: { color: '#fff' } }}
//           rightComponent={{ icon: 'home', color: '#fff' }}
//         />
//       </View>
//     );
//   }
// }

// // export default function AppHeader() {
// //   return (
// //     <View style={styles.container}>
// //       <Header
// //         leftComponent={{ icon: 'menu', color: '#fff' }}
// //         centerComponent={{ text: 'Time Calculator', style: { color: '#fff' } }}
// //         rightComponent={{ icon: 'home', color: '#fff' }}
// //       />
// //     </View>
// //   );
// // }

// // from: https://snack.expo.io/@reyanshmishra/header-buttons-react-native-elements
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
// });