import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Welcome from '../Welcome.js';
import Home from '../components/home/Home.js';
import About from '../components/about/About.js';
import Signup from '../components/signup/Signup.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "welcome" component = {Welcome} title = "Welcome" initial = {true}  hideNavBar={true} />
         <Scene key = "signup" component = {Signup} title = "Signup" hideNavBar={true} />
         <Scene key = "home" component = {Home} title = "Home" />
         <Scene key = "about" component = {About} title = "About" />
      </Scene>
   </Router>
)
export default Routes;
