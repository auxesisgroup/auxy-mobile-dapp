import React from 'react';
import { BackHandler, AsyncStorage,TextInput, Modal, WebView, StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


var ToastAndroid = require('NativeModules').ToastAndroid;


export default class Signup extends React.Component{
   state = {
      myState: "fgfdgfd deserunt mollit anim id est laborum.",
      modalVisible: false,
   }
   updateState = () => this.setState({ myState: 'The state is updated' })

   constructor(props)
   {
       super(props);
   }

   componentDidMount(){
     BackHandler.addEventListener('hardwareBackPress', function() {
       // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
       // Typically you would use the navigator here to go to the last state.

       console.log("inside BackHandler in signup");
     });
     console.log("...Printed...");
   }

   componentWillUnmount(){
     BackHandler.removeEventListener('hardwareBackPress', function() {
       // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
       // Typically you would use the navigator here to go to the last state.

       console.log("inside BackHandler removed in signup");
     });
   }

   render() {
      const resizeMode = 'cover';
      const text = 'Powered by Auxesis';

      return (
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#fff',
              justifyContent: 'center',
              top:0,
              left:0,
              marginTop:22,
              flex:1,
              width:'100%'
            }}
          >
            <Image source={require('../../img/auxy.png')} style={styles.auxylogo}/>
          </View>

          <View style={styles.emaildiv}>
              <Text style={styles.emailtext}>Enter Email</Text>
              <TextInput style = {styles.textInput}  placeholder="Enter your email"/>
              <Text style={styles.recoverfunds}>
                 Recover Funds?
              </Text>
              <View style={styles.auxybutton}
                <TouchableHighlight
                  style={styles.submit}
                  onPress={() => {this.callMe();}}
                  underlayColor='#337ab7'>
                    <Text style={styles.submitText}>Signup!</Text>
                </TouchableHighlight>
              </View>
          </View>


          <View
            style={{
              backgroundColor: 'transparent',
              position:'absolute',
              bottom:0,
              marginBottom:5
            }}
          >

            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color:'white'
              }}
            >
              {text}
            </Text>

          </View>

        </View>
      );
   }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor:  '#004A7C',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  },
  getstartbutton:{
    margin:2,
    width:'100%',
    color:'#337ab7',
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
  },
  emaildiv:{
    backgroundColor:'#fff',
    width:'100%',
    height:160,
    marginTop:'40%',
    marginRight:10,
    marginLeft:10
  },
  emailtext:{
    fontSize:20,
    fontWeight:600
  },
  textInput:{
    height:10
  },
  recoverfunds:{
    fontWeight:600
  },
  auxybutton:{
    alignItems:'center',
    justifyContent:'center'
  }
});
