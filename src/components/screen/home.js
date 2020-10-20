import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, TextInput, Button, Image } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { helloSaga } from '../../common/sagas';

// const sagaMiddleWare = createSagaMiddleware() 
// const store = createStore(
//     reducer,
//     applyMiddleware(sagaMiddleWare)
//   )
//   sagaMiddleWare.run(helloSaga)
  
// const action = type => store.dispatch({type})

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }

    }

    handleSubmitClick() {
        let validated = false;
        if (!this.state.name || this.state.name.trim() === "") {
            ToastAndroid.show("Please enter name", ToastAndroid.SHORT);
            validated = false;
            return;
        }
        else if (this.state.email == null || this.state.email == "" | this.state.email.trim() === "") {
            ToastAndroid.show("Please enter email", ToastAndroid.SHORT);
            validated = false;
            return;
        }
        else if (this.state.password == null || this.state.password == "" || this.state.password.trim() === "") {
            ToastAndroid.show("Please enter password", ToastAndroid.SHORT);
            validated = false;
            return;
        }
        else {
            validated = true;
            return;
        }
    }

    render() {

        let number = 3;
        let num = number + 'aaaa' + 434;
        return (
            <View style={styles.MainContainer}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView behavior={"height"} enabled={true}>
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <Text>Number : {num}</Text>
                                <Text>{`aaa ${number} bbbb`}</Text>
                            </View>
                            <TextInput
                                value={this.state.name}
                                placeholder='Enter name'
                                onChangeText={name => this.setState({ name })}
                                style={{ width: 200, height: 50, borderColor: '#000', borderWidth: 2 }}
                                keyboardType="default"
                            />
                            <TextInput
                                value={this.state.email}
                                placeholder='Enter email'
                                onChangeText={email => this.setState({ email })}
                                style={{ width: 200, height: 50, borderColor: '#000', borderWidth: 2 }}
                            />
                            <TextInput
                                value={this.state.password}
                                placeholder='Enter password'
                                onChangeText={password => this.setState({ password })}
                                style={{ width: 200, height: 50, borderColor: '#000', borderWidth: 2 }}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity onPress={() => this.handleSubmitClick()}>
                                <Text>Submit</Text>
                            </TouchableOpacity>
                            <Button
                                onPress={() => this.props.navigation.navigate('product', { name: this.state.name })}
                                title="Go to product"
                            />
                            <Text>{this.state.name}</Text>
                            <Text>{this.state.email}</Text>
                            <Text>{this.state.password}</Text>
                            <View>
                                <DemoPress text={"hello"} />
                            </View>
                            <View>
                                {this.props.children}
                            </View>
                            <View>
                                {this.props.left}
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}
const DemoPress = props => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',

    },

});


