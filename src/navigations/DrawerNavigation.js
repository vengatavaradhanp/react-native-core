import React from 'react';
import { TouchableOpacity, Platform, SafeAreaView, ScrollView } from 'react-native';
import { SunIcon, HamburgerIcon, MoonIcon, InfoOutlineIcon } from 'native-base';
import Careers from '../pages/Careers';
import Settings from '../pages/Settings';
import Help from '../pages/Help';
// import {  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

class CustomDrawerComponent extends React.Component {
    render() {
        const props = this.props
        return (
            <SafeAreaView>
                <ScrollView>
                    <DrawerItems {...props}/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const StackNavigator = createStackNavigator({
    Careers:
    {
        screen: Careers,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (<TouchableOpacity onPress={() => navigation.toggleDrawer()}><HamburgerIcon /></TouchableOpacity>),
                headerTitle: 'Careers',
            }
        }
    },
    Settings:
    {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (<TouchableOpacity onPress={() => navigation.toggleDrawer()}><HamburgerIcon /></TouchableOpacity>),
                headerTitle: 'Settings',
            }
        }
    },
    Help:
    {
        screen: Help,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (<TouchableOpacity onPress={() => navigation.toggleDrawer()}><HamburgerIcon /></TouchableOpacity>),
                headerTitle: 'Help',
            }
        }
    }
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                marginTop: -25
            },
            headerTitleStyle: {
                textAlign: "center",
                flex: 1,
                color: '#FFF',
                right: 20
            },
        }
    })



const AppDrawerNavigator = createDrawerNavigator({
    Carrers:
    {
        screen: StackNavigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (<SunIcon />),
        }
    },
    Settings:
    {
        screen: StackNavigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (<MoonIcon />),
        }
    },
    Help:
    {
        screen: StackNavigator,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (<InfoOutlineIcon />),
        }
    },
},
    {
        // initialRouteName: 'Carrers',
        contentComponent: CustomDrawerComponent,
        drawerBackgroundColor: '#FFFFFF',
        contentOptions: {
            activeTintColor: '#F6846C',
            activeBackgroundColor: '#F2F2F2',
            iconContainerStyle: {
                opacity: 1
            },
        }
    }
    )


    export default AppDrawerNavigator;