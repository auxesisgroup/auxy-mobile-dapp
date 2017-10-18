import React from 'react';
import { AsyncStorage,Modal, WebView, StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import { Actions } from 'react-native-router-flux';

var ToastAndroid = require('NativeModules').ToastAndroid;


export default class Home extends React.Component{
   state = {
      myState: "fgfdgfd deserunt mollit anim id est laborum.",
      modalVisible: false,
      setIfAuth:""
   }

   componentDidMount = () => AsyncStorage.getItem('setIfAuth').then(
     (value)=>{
         this.state.setIfAuth = "Y";
         console.log(this.state);
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
        <View style={{flex:1,alignItems:'center'}}>

            <Text>Home page</Text>

        </View>
      );
   }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor:  '#eee',
    alignItems: 'center',
  },
  getstartbutton:{
    margin:2,
    width:'100%',
    color:'#841584',
    borderRadius:160,
    borderColor:'rgba(0,0,0,0.2)',
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#337ab7',
    borderRadius:100,
    borderWidth: 1,
    width:150,
    borderColor:'rgba(0,0,0,0.2)',
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:16
  }
});
