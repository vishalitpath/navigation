import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterApp extends React.Component {
    
    render() {
        return (
            <View style={styles.MainContainer}>
                <TouchableOpacity onPress={this.props.increaseCounter}>
                    <Text>increase</Text>
                </TouchableOpacity>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                    <Text>decrease</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});


