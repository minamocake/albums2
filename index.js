// one file, one component!

//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// './' means current directry
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
  //headerText is possible to be changed anywords such as Toshowtext etc!
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device
AppRegistry.registerComponent('albums2', () => App);
