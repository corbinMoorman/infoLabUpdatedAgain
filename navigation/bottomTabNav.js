import *as React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import IOS_Screen from "../screens/ios"
import Iphone13Screen from "../screens/iphone13"
import Iphone14Screen from "../screens/iphone14"
import IOSINFO from '../screens/iosINFO'
const Tab = createMaterialBottomTabNavigator()


const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "IOS" component = {IOSINFO}/>
            <Tab.Screen name = "i13" component = {Iphone13Screen}/>
            <Tab.Screen name = "i14" component = {Iphone14Screen}/>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator