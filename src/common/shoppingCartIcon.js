import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';

export class ShoppingCartIcon extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{
                            position: 'absolute', height: 30, width: 30,
                            borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)',
                            alignItems: 'center', justifyContent: 'center', zIndex: 2000
                        }}>
                            <Text>{this.props.cartItems.length}</Text>
                        </View>
                        <Icon name="ios-cart" size={30} />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        cartItems: state
    }
}
export default connect(mapStateToProps)(ShoppingCartIcon);
