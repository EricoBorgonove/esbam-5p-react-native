import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from './src/screens/navigation/HomeScreen'
import DetailsScreen from './src/screens/navigation/DetailsScreen'

const Tab = createBottomTabNavigator()

export default function AppTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Details' component={DetailsScreen}/>
        </Tab.Navigator>
    )
}