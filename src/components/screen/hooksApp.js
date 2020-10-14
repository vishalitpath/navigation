import React, { useState, useEffect, useContext, useReducer, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, TextInput, TouchableHighlight, KeyboardAvoidingView, Button } from 'react-native';
import axios from 'axios';

import ThemeContext from '../../../assets/themes';
import { OverlayOuter } from '../../../src/common/overlay';

const initialState = { count: 0 }
export default function HooksApp() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [storeData, setStoreData] = useState([]);
    const [text, setText] = useState('');
    const [storeMessage, setStoreMessage] = useState([]);
    const theme = useContext(ThemeContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const prevMessage = useRef('');

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const res = response.data;
                setStoreData(res);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('error in response', error);
            })
        prevMessage.current = text

    }, []
    );
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                return state
        }
    }

    function _handlePush(text) {

        if (!storeMessage.includes(text)) {
            isLoading
            storeMessage.push(text)
            // setTimeout(() => {console.log("TimeOut")},2000)
            axios.post('https://webhook.site/57c403b4-9abb-4415-9bef-4d092d976f7d', {
                username: text
            })
                .then(response => {
                    console.log('response :------ ', response.config.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            console.warn("same message is not allow!");
        }
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <OverlayOuter>
                <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#86aac2" />
            </OverlayOuter>
        )
    }
    else {
        return (
            <KeyboardAvoidingView behavior="height" style={styles.container}>
                <Text>You clicked {count} times</Text>

                <TouchableOpacity
                    style={{
                        borderRadius: 8, justifyContent: 'center',
                        height: 40, alignItems: 'center', width: 120, backgroundColor: theme.touchableGreen
                    }}
                    onPress={() => { setCount(count + 1) }}>
                    <Text style={{ fontSize: 22 }}>Click me</Text>
                </TouchableOpacity>

                <View style={{ flex: 2, justifyContent: 'space-around', alignItems: 'center' }}>

                    <TextInput placeholder="Enter message" style={{
                        height: 40, width: 220,
                        borderColor: '#000', borderWidth: 2
                    }} onChangeText={(text) => { setText(text) }} />

                    <Text>{text}</Text>

                    <TouchableOpacity style={{
                        backgroundColor: theme.background, width: 120, justifyContent: 'center'
                        , alignItems: 'center', height: 40, borderRadius: 8
                    }} onPress={() => {
                        _handlePush(text)

                    }}>
                        <Text style={{ fontSize: 22 }}>Submit</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 20, color: 'red' }}>Message you have Entered</Text>
                        {
                            storeMessage.length > 0 ?
                                storeMessage.map((item, key) => (
                                    <View key={key}>
                                        <Text style={{ fontSize: 20 }}>Message : {item}</Text>
                                    </View>
                                )) : <Text>Data is not available</Text>
                        }
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: 'red' }}>Data from api</Text>
                        {
                            storeData.length > 0 ?
                                storeData.map((item, key) => (
                                    key == 0 ? <View key={key}>
                                        <Text style={{ fontSize: 20 }}>id : {item.id}</Text>
                                        <Text style={{ fontSize: 20 }}>name : {item.name}</Text>
                                    </View> : null
                                )) : <Text>Data is not available</Text>
                        }
                    </View>

                </View>
                <View style={styles.counterViewStyle}>
                    <TouchableOpacity style={styles.TouchableButton} onPress={() => dispatch({ type: 'increment' })} >
                        <Text style={{ fontSize: 30 }}>+</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25 }}>{state.count}</Text>
                    <TouchableOpacity style={styles.TouchableButton} onPress={() => dispatch({ type: 'decrement' })}>
                        <Text style={{ fontSize: 30 }}>-</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'space-around',
        width: '100%'
    },
    TouchableButton: {
        backgroundColor: '#159212',
        width: 50,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center'
    },
})