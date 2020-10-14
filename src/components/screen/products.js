import { StyleSheet, Text, View, ActivityIndicator, Alert, TouchableOpacity, ScrollView, Platform, TextInput, Button, Image } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';

import HooksApp from './hooksApp';
import Home from './home';
import Composition from './composition';
import ThemeContext from '../../../assets/themes';

export default class Products extends React.Component {

  static navigationOptions = {
    title: 'Products',
  }
  // static contextType = ThemeContext;

  constructor(props) {
    super();
    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     const name = Object.keys(responseJson)
    //     this.setState({ data: responseJson, isLoading: false })
    //   })
    //   .catch((error) => {
    //     console.log("error in response", error)
    //   })



    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const res = response.data;
        // console.log("response", response)
        this.setState({ data: res, isLoading: false })
      })
      .catch((error) => { console.log(error) })
  }

  handle() {
    const jsonBody = {
      name: "smith",
      mobile: "9624752577",
      email: "vishal@gmail.com",
      age: "20",
      password: "123",
    }

    fetch('http://localhost:8080/user/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: jsonBody
    })
      .then((response) => {
        // console.log(response, "------------------lllll")
      })
  }

  render() {
    const { navigation } = this.props;
    // console.log("aa", this.state.data);
    if (this.state.isLoading) {
      return (
        <View style={styles.MainContainer}>
          <ActivityIndicator size={"small"} />
        </View>
      )
    }
    else {
      return (
        <View style={styles.MainContainer}>
          <View>
            <Text>name: {JSON.stringify(navigation.getParam('name'))}</Text>
          </View>
          <View>
            {
              this.state.data.length > 0 ?
                this.state.data.map((item, key) => (
                  key == 0 ?
                    <View key={key}>
                      <Text>id: {item.id}</Text>
                      <Text>name :{item.name}</Text>
                    </View>
                    : null
                )) : <View><Text>Hi</Text></View>
            }
            {/* 
            <TouchableOpacity
              style={{
                borderRadius: 8, justifyContent: 'center',
                height: 40, alignItems: 'center', width: 120, backgroundColor: '#189292'
              }}
              onPress={this.handle()}>
              <Text style={{ fontSize: 22 }}>Api call</Text>
            </TouchableOpacity> */}
          {/* <Button title="press" theme={this.context}/> */}
          </View>

          {/* reuse code between components */}
          <Composition left={<Text style={{ fontSize: 20 }}>Containment</Text>}>
            <Text style={{ fontSize: 25 }}>This is called Containment</Text>
          </Composition>
        </View>
      )
    }

  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});


