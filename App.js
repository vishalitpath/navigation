import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native';
import React, { Component } from 'react';
import Router from './router';
import { Provider } from 'react-redux';

import store from './src/redux/store/index';

const themes = {
  light: {
    foreground: '#000',
    background: '#eeeeee',
    touchableGreen: '#159212'
  },
  dark: {
    foreground: '#fff',
    background: '#222222'
  }
}

const ThemeContext = React.createContext(themes.light);
// import ThemeContext from './assets/themes';

export default class App extends React.Component {

  render() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeContext.Provider>
    );
  }
}





