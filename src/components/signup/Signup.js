import React from 'react';
import { AsyncStorage,TextInput, Modal, WebView, StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';

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



   render() {
      const resizeMode = 'cover';
      const text = 'Powered by Auxesis';

      return (
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: 'transparent',
              justifyContent: 'center',
              position:'absolute',
              top:0,
              left:0,
              margin:16,
              flex:1
            }}
          >
            <Image source={require('../../img/auxy.png')} style={styles.auxylogo}/>
          </View>

          <View style={styles.emaildiv}>
              <Text style={styles.emailtext}>Enter Email</Text>
              <TextInput style = {styles.textInput}  placeholder="Enter your email"/>
              <Text>
                 Recover Funds?
              </Text>
              <View
                style={{
                  backgroundColor: 'transparent',
                  position:'absolute',
                  marginBottom:100,
                  bottom:0,
                  flex:2
                }}
              >
                <TouchableHighlight
                  style={styles.submit}
                  onPress={() => {this.callMe();}}
                  underlayColor='#337ab7'>
                    <Text style={styles.submitText}>Get Started</Text>
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
    height:200,
    padding:20
  }
});
