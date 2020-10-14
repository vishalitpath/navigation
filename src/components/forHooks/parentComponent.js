import React, { useState, useCallback } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import Title from './title';
import Button from './button';
import Count from './count';

function ParentComponent() {
    const [age, setAge] = useState(21);
    const [number, setNumber] = useState(10);

    const incrementAge = useCallback(
        () => {
            setAge(age + 1);
        }, [age]
        );

    const incrementNumber = useCallback(
        () => {
            setNumber(number + 1);
        },[number]
        );

    return (
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <Title />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button onPress={incrementAge}>
                    <Text style={{ fontSize: 20 }}> age </Text>
                </Button>
                <Count text={"age"} count={age} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button onPress={incrementNumber}>
                    <Text style={{ fontSize: 20 }}>number</Text>
                </Button>
                <Count text={"number"} count={number} />
            </View>
        </View>
    )
}

export default ParentComponent;
