import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { HamburgerIcon, Icon } from 'native-base';
import { createSwitchNavigator, createAppContainer  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import AppDrawerNavigator from './DrawerNavigation'
import Careers from '../pages/Careers';
import Settings from '../pages/Settings';
import Help from '../pages/Help';

const AppStackNavigator = createStackNavigator({
    AppDrawerNavigator: {
        screen: AppDrawerNavigator,
        navigationOptions: {
            header: null,
        }
    },
    Careers: {
        screen: Careers,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()}><InfoOutlineIcon /></TouchableOpacity>),
                headerTitle: 'Careers',
                headerStyle: {
                    marginTop: -25
                },
                headerTitleStyle: {
                    textAlign: "center",
                    flex: 1,
                    color: '#FFF',
                    right: 20
                }
            }
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()}><HamburgerIcon /></TouchableOpacity>),
                headerTitle: 'Settings',
                headerStyle: {
                    marginTop: -25
                },
                headerTitleStyle: {
                    textAlign: "center",
                    flex: 1,
                    color: '#FFF',
                    right: 20
                }
            }
        }
    },
    Help: {
        screen: Help,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()}><HamburgerIcon /></TouchableOpacity>),
                headerTitle: 'Help',
                headerStyle: {
                    marginTop: -25
                },
                headerTitleStyle: {
                    textAlign: "center",
                    flex: 1,
                    color: '#FFF',
                    right: 20
                }
            }
        }
    }
})

export const RootNavigation = createSwitchNavigator({
    App: AppStackNavigator
})


export default createAppContainer(RootNavigation);