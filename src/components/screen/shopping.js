import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export class shopping extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('electronics')}>
                    <Text style={{fontSize:18}}>Electronics</Text>
                </TouchableOpacity>
                <View style={{height:20}}/>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.navigate('books')}>
                    <Text style={{fontSize:18}}>Books</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableStyle:{
        width:150,
        backgroundColor:"rgba(201, 76, 76, 0.3)",
        height:35,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
});
export default shopping
