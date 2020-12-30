import React from 'react';
import {
    View,
    TouchableOpacity,
    Image
} from "react-native";

export default function HeaderLeft(props) {
    return (
        <View>
            <TouchableOpacity onPress={() => props.onClick()}>
                <Image
                    source={require('../components/images/clipboard.png')}
                    style={{ width: 20, height: 20, marginLeft: 10 }}
                />
            </TouchableOpacity>
        </View>
    );
};
