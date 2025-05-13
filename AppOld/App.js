import React from "react";
import { SafeAreaView } from "react-native";
//import HomeVivara from './src/screens/HomeVivara';
import HomeScreen from './src/screens/HomeScreen';

export default function App(){
    return (
        <SafeAreaView style={{flex:1}}>
            <HomeScreen/>

        </SafeAreaView>
    )
}