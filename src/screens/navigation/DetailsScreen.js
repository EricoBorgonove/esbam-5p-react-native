import React from "react";
import { View, Text, Button } from "react-native"; 

export default function DetailsScreen({route}){
    const {userId} = route.params;

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text> Details Screen </Text>
            <Text> ID do Usuário: {userId}</Text>

        </View>
    )
}