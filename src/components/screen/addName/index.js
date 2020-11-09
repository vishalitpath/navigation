import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { styles } from './styles';
import { addName } from './addNameAction';

class AddName extends Component {
    render() {
        console.log("before calling function")
        let a = Index();
        console.log("after calling function")
        console.log(a);
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}


async function Index() {
    console.log("IN function")
    const res = await fetch('https://api.github.com/users');
    console.log("before res")
    const users = await res.json();
    console.log("users resolvede")
    return users
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addName: function () {
            dispatch(addName())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddName)
