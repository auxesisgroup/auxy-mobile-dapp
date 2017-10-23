import React from 'react';
import { AsyncStorage,Modal, WebView, StyleSheet,StatusBar, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';

import  HeaderLayout from '../layout/HeaderLayout.js';
import { Header } from 'react-native-elements';

import NavigationBar from 'react-native-navbar';

var ToastAndroid = require('NativeModules').ToastAndroid;


export default class Home extends React.Component{
   state = {
      myState: "fgfdgfd deserunt mollit anim id est laborum.",
      modalVisible: false,
      setIfAuth:""
   }

   componentDidMount = () => AsyncStorage.getItem('setIfAuth').then(
     (value)=>{
        //  if(value == "N"){
        //    this.props.navigation.dispatch(NavigationActions.reset({
        //      index:0,
        //      actions:[
        //        NavigationActions.navigate({routeName:'signup'})
        //      ]
        //    }));
        //  }else{
        //     console.log(this.state+"\n"+value);
        //  }
         console.log(this.state+"\n"+value);
     }
    );


   updateState = () => this.setState({ myState: 'The state is updated' })

   constructor(props)
   {
       super(props);
   }


   setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }


   callMe(){
     console.log("callMe");
     Actions.about();
   };

   render() {
      const resizeMode = 'cover';
      const text = 'Powered by Auxesis';

      return (
        <View style={styles.container}>
          <StatusBar
             backgroundColor="#337ab7"
             barStyle="light-content"
           />
          <View  style={styles.headerLayout} >
            <HeaderLayout/>
          </View>
          <View style={styles.homeView}>
              <Text>Home page test inside asdf</Text>
              <Image source={require('../../img/auxy.png')} style={styles.auxylogo}/>
          </View>
        </View>
      );
   }

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  headerLayout:{
    flex:1,
    backgroundColor:'#004A7C',
    borderColor:'#004A7C',
    height:25
  },
  homeView:{
    flex:2,
    height:'100%'
  }
});
