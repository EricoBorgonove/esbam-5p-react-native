import React from "react";
import { View, Text, Button } from "react-native"; 

export default function HomeScreen({navigation}){
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text> Home Screen </Text>
            <Button
                title="Ir para Detalhes"
                onPress={()=> navigation.navigate('Details', {userId: 42})}
            />
        </View>
    )
}