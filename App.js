import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookTransactionScreen from './screens/BookTransactionsScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer></AppContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const tabNavigator = createBottomTabNavigator({
  Transcation:{screen:BookTransactionScreen},
  Search:{screen:SearchScreen}
})
const AppContainer = createAppContainer(tabNavigator)