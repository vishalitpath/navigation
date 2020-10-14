import React, { useState, useEffect, Children } from 'react';
import { StyleSheet, View, ActivityIndicator, TextInput, } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const OverlayOuter = (props) => {
    return(
        <Animatable.View animation="bounce" easing={'ease'} duration={1000} style={{flex:1,justifyContent:'center'}}>
            {props.children}
        </Animatable.View>
    )
}
