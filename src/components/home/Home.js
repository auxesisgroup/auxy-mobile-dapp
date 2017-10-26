import React from 'react';
import { AsyncStorage,Modal, Alert, WebView, StyleSheet,StatusBar, Text, View, Image, ScrollView, Button, TouchableOpacity,TouchableHighlight, Icon } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';

import  HeaderLayout from '../layout/HeaderLayout.js';
import { Header } from 'react-native-elements';

import  Drawers from '../layout/Drawers.js';

import NavigationBar from 'react-native-navbar';

import { Expo,Exponent } from 'expo';

import Drawer from 'react-native-drawer';

var ToastAndroid = require('NativeModules').ToastAndroid;



export default class Home extends React.Component{
   state = {
      myState: "fgfdgfd deserunt mollit anim id est laborum.",
      modalVisible: false,
      setIfAuth:"",
      useremail:"",
      dumtext:""
   }


   openDrawer(){
     console.log("open");
     this.props.navigation.navigate('Drawer'); // open drawer
   }
   closeDrawer(){
     this.props.navigation.navigate('DrawerClose'); // close drawer
   }

   componentDidMount = () => AsyncStorage.getItem('setIfAuth').then(
     (value)=>{
       console.log(value);
         if(value == "N"){
           this.props.navigation.dispatch(NavigationActions.reset({
             index:0,
             actions:[
               NavigationActions.navigate({routeName:'signup'})
             ]
           }));
         }else{
            console.log(this.state+"\n"+value);
         }

         AsyncStorage.getItem('AuxyUserEmail').then((name)=>{
           this.setState({useremail:name});
         });
     }
    );


   updateState = () => this.setState({ myState: 'The state is updated' })

   constructor(props)
   {
       super(props);
       console.log(this.props);
   }

   logout(){
     Alert.alert(
       'Logout app...',
       'Sure want to logout?',
       [
         {
           text:'Nope',style:'cancel',onPress:()=>{console.log("cancel click");}
         },
         {
           text:'Yes',onPress:()=>{
             console.log("yes click");
             AsyncStorage.setItem("setIfAuth","N");
             setTimeout(()=>{
               this.props.navigation.dispatch(NavigationActions.reset({
                index:0,
                actions:[
                  NavigationActions.navigate({routeName:'welcome'})
                ]
               }));
             },1000);

           }
         }
       ]
     )
   }

   setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }


   callMe(){
     console.log("callMe");
     Actions.about();
   };

   render() {
     const rightButtonConfig = {
      title: 'Next',
      handler: () => {
        alert('hello!');
        console.log("clicked");
      },
      tintColor:'#fff'
    };

  //  var icon1 = (<View><Icon name='touch-app' color="#fff"/></View>);

    const leftButtonConfig = {
     title: 'MenuBtn',
     handler: () => {
       console.log("clicked2");
       this.openDrawer();
     },
     tintColor:'#fff'
   };

    const titleConfig = {
      title: 'Home',
      style:{
        color:'#fff'
      }
    };

    const stats = {
      tintColor:"red",
      style:"dark-content"
    }

     var contents = (
       <View style={styles.container}>
         <StatusBar
          backgroundColor="#004A7C"
          barStyle="light-content"
        />
         <Spinner visible={this.state.visibleLoader} textContent={"Wait..."} textStyle={{color: '#FFF'}} />


         <View
           style={{
             backgroundColor: '#fff',
             justifyContent: 'center',
             top:0,
             left:0,
             marginTop:22,
             flex:1,
             position:'absolute',
             height:'8%',
             width:'100%'
           }}
         >
           <Image source={require('../../img/auxy.png')} style={styles.auxylogo}/>
         </View>

           <View style={styles.homeView}>
               <Text style={styles.homeView2}>Dear</Text>
               <Text style={styles.homeView3}>{this.state.useremail?this.state.useremail:'Yet unknown'}!</Text>
               <Text style={styles.homeView3}> Welcome to Auxy wallet</Text>

               <View style={styles.auxybutton}>
                 <TouchableHighlight
                   style={styles.submit}
                   onPress={() => {this.logout();}}
                   underlayColor='#337ab7'>
                   <View>
                     <Text style={styles.submitText}>
                       Logout
                     </Text>
                   </View>
                 </TouchableHighlight>
               </View>

           </View>
       </View>
     );

     var content = (
       <View>
        <Text>HomeController</Text>
       </View>
     );

      return (
        contents
      );
   }

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#004A7C'
  },
  containerBar:{
    flex:1,
    backgroundColor:"#337ab7"
  },
  headerLayout:{
    flex:1,
    backgroundColor:'#004A7C',
    borderColor:'#004A7C',
  },
  homeView:{
    flex:3,
    height:'100%',
      marginTop:'20%',
      alignItems:'center'
  },
  homeView2:{
    marginTop:'20%',
    color:'#fff',
    fontSize:18,
    padding:25,
    textAlign:'center'
  },
  homeView3:{
    marginTop:'2%',
    color:'#fff',
    fontSize:18,
    textAlign:'center'
  },
  statusbar:{
    height:24
  },
  navbar:{
    marginTop:24,
    height:'8%',
    backgroundColor:'cyan'

  },
  auxylogo:{
    width:130,
    height:50,
    marginLeft:'8%'
  },
  auxybutton:{
    alignItems:'center',
    bottom:0,
    left:0,
    right:0,
    justifyContent:'center',
    marginBottom:'8%',
    marginTop:'10%',
    width:'100%'
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:12,
    paddingBottom:12,
    backgroundColor:'#337ab7',
    borderRadius:5,
    borderWidth: 1,
    width:180,
    height:50,
    borderColor:'rgba(0,0,0,0.2)',
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:16
  },
});
//<Drawers data={contents} screentitle={'Home Page'}/>
