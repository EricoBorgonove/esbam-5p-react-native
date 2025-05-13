import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from './src/screens/navigation/HomeScreen';
import DetailsScreen from './src/screens/navigation/DetailsScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Details" component={DetailsScreen}/>
        </Drawer.Navigator>
    );
}
