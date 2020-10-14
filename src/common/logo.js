import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView, Platform, TextInput, Button, Image } from 'react-native';
import React, { Component } from 'react';


export default class LogoTitle extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View {...this.props}>
                <Image
                    source={require(this.props.source)}
                    style={{ width: this.props.width, height: this.props.height }}
                />
            </View>
        );
    }
}