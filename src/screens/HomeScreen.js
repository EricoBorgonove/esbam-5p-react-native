import React from "react";
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá Mundo !</Text>
            <Text style={styles.subtitle}>Bem Vindos ao React Native</Text>
            <Button
                title="Clique aqui"
                onPress={()=> Alert.alert('Botão Pressionado')}
            />
            <Image
            source={{uri: 'https://logospng.org/download/vivara/logo-vivara-4096.png'}}
            style={{width: 200, height: 200}}
            />
            <TouchableOpacity onPress={()=> Alert.alert('Botão Pressionado')}>
                <Image
                source={{uri: 'https://logospng.org/download/vivara/logo-vivara-4096.png'}}
                style={{width: 200, height: 200}}
                />                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle:{
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
})

export default HomeScreen;