import React from 'react';
import {
  View,Text
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HeaderLayout extends React.Component {
  render(){
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff',onPress={()=>{console.log("menu item");}} }}
        centerComponent={{ text: 'Home', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff',onPress={()=>{console.log("home item");}} }}
      />
    )
  }
}
/*<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>*/
