import React, {useState} from "react";

import Cadastro from "./src/dados_persistentes/cadastro";
import Lista from "./src/dados_persistentes/lista";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App(){
    const [usuarios, setUsuarios] = useState([])
    const addUsuario = (novoUsuario) =>{
        setUsuarios([...usuarios, novoUsuario])
    }
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Lista'>
                <Stack.Screen name='Cadastro'>
                    {(props)=> <Cadastro {...props} addUsuario={addUsuario}/>}
                </Stack.Screen>
                <Stack.Screen name='Lista'>
                    {(props)=> <Lista {...props} usuarios={usuarios}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}