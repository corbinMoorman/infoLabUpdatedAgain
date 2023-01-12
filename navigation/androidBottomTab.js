import *as React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Android from "../screens/android"
import SamGalaxyA13Screen from '../screens/SamGalaxyA13'
import SamGalaxyS22Screen from '../screens/SamGalaxyS22'
import AndroidINFO from '../screens/andriodINFO'
const Tab = createMaterialBottomTabNavigator()


const AndroidBottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Android" component = {AndroidINFO}/>
            <Tab.Screen name = "A13" component = {SamGalaxyA13Screen}/>
            <Tab.Screen name = "A22" component = {SamGalaxyS22Screen}/>
        </Tab.Navigator>
    )
}
export default AndroidBottomTabNavigator