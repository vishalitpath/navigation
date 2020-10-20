import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { electronics } from '../common/data';

export class Electronics extends Component {
    render() {
        return (
            <View style={styles.container}>
                {
                    electronics.map((item, key) => (
                        <View key={key} style={{ flexDirection: 'row', justifyContent: 'space-around',alignContent:'space-around' }}>
                            <TouchableOpacity style={styles.touchableStyle} onPress={(item) => this.props.addItemToCart(item)}>
                                <Text>{item.id} </Text>
                                <Text>{item.name} </Text>
                                <Text>{item.price} </Text>
                            </TouchableOpacity>
                            
                        </View>
                        
                    ))
                }
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', psyload: product })
    }
}
export default connect(null, mapDispatchToProps)(Electronics)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableStyle:{
        width:150,
        backgroundColor:"rgba(201, 76, 76, 0.3)",
        height:85,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:5,
        borderBottomColor:'#000'
    }
});