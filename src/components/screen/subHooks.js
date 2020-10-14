import React from 'react'
import { View } from 'react-native'
import ParentComponent from '../forHooks/parentComponent';

export default function SubHooks() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ParentComponent/>
        </View>
    )
}
