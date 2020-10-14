import React, { memo } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

function Button({ onPress, children }) {
    console.log('rendering children ', children);
    return (
        <View>
            <TouchableOpacity style={styles.touchableButton} onPress={onPress}>
                {children}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touchableButton: {
        backgroundColor: "green",
        width: 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
})

export default memo(Button)