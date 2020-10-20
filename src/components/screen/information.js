import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native';
import React, { Component } from 'react';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import loggerMiddleware from 'redux-logger';

import CounterApp from '../screen/counterApp';
import logger from '../../redux/middleware/logger';

const initialState = {
  counter: 0
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 }
  }
  return state
}

const store = createStore(reducer,applyMiddleware(logger))

export default class Information extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}




