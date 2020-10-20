import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import cartItems from '../redux/reducers/cartItems';


export class Cart extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                {this.props.cartItems.length > 0 ?
                    this.props.cartItems.map((item, key) =>
                        <View key={key} style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                            <Text>{item}</Text>
                        </View>
                    )
                    : <Text>No items</Text>
                }
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps)(Cart)
