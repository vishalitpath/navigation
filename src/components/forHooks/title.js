import React, { memo } from 'react'
import { Text, View } from 'react-native'

function Title() {
    console.log("Rendering Title")
    return (
        <View>
            <Text style={{ fontSize: 20 }}>useCallback hooks</Text>
        </View>
    )
}

export default memo(Title)