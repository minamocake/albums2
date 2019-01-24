//Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
// './' means current directry
import Header from './src/components/header';

//Create a component
const App = () => (
  //headerText is possible to be changed anywords such as Toshowtext etc!
  <Header headerText={'Albums'} />
);

//Render it to the device
AppRegistry.registerComponent('albums2', () => App);
