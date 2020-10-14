import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderBackButton, HeaderTitle } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import Products from './src/components/screen/products';
import Home from './src/components/screen/home';
import Information from './src/components/screen/information';
import TodoApp from './src/components/screen/todoApp';
import HooksApp from './src/components/screen/hooksApp';
import Composition from './src/components/screen/composition';
import SubHooks from './src/components/screen/subHooks';

const homeStackNavigator = createStackNavigator(
    {
        homeStackNavigator: Home,
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: () =>
                    (<TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require('./src/components/images/clipboard.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>)
            };
        }
    }
);

const productStackNavigator = createStackNavigator(
    {
        productNavigator: Products
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: () =>
                    (<TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require('./src/components/images/clipboard.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>)
            };
        }
    }
);

const counterStackNavigator = createStackNavigator(
    {
        counter: Information
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: () =>
                    (<TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require('./src/components/images/clipboard.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>)
            };
        }
    }
);

const todoStackNavigator = createStackNavigator(
    {
        Todo : TodoApp
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Text>open</Text>
                    </TouchableOpacity>
                )
            }
        }
    }
);
const drawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: homeStackNavigator,
        },
        product: {
            screen: productStackNavigator,
        },
        Counter: {
            screen: counterStackNavigator,
        },
        // TodoApp: {
        //     screen: todoStackNavigator,
        // }
        HooksApp:{
            screen: HooksApp,
        },
        composition:{
            screen:Composition,
        },
        SubHooks:{
            screen:SubHooks,
        }
    },
    {
        drawerType: 'slide',
        drawerPosition: 'left',
    }
);

const AppSwitchNavigator = createSwitchNavigator(
    {
        home: { screen: drawerNavigator },
        product: { screen: Home }
    },
    {
    }
);

const tabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home',
            },
        },
        product: {
            screen: Products,
            navigationOptions: {
                tabBarLabel: 'Products',
            },
        },
        information: {
            screen: Information,
            navigationOptions: {
                tabBarLabel: 'Information',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/components/images/bell.png')}
                        style={{ tintColor: tintColor, width: 20, height: 20 }}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            // activeBackgroundColor: '#aaaa55',
            activeTintColor: '#984512',
            // inactiveBackgroundColor: '#999999',
            style: {
                justifyContent: 'space-around',
                borderColor: '#000',
            },
            inactiveTintColor: '#000',
            labelStyle: {
                fontSize: 20,
                justifyContent: 'space-around'
            }
        },
    }
);

const AppContainer = createAppContainer(drawerNavigator);
export default AppContainer;