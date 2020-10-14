import React, { memo } from 'react'
import { Text, View } from 'react-native'

function Count({ text, count }) {
    console.log(`Rendering ${text}`)
    return (
        <View>
            <Text>{text} - {count}</Text>
        </View>
    )
}

export default memo(Count)