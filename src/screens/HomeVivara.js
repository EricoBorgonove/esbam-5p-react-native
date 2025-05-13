import React from "react";
import {Alert, Image, Text, TouchableOpacity, View } from "react-native";
import styles from '../../assets/styles/HomeVivaraStyles'

const HomeVivara =()=>{
    return(
        <View style={styles.container}>
            <Image 
            source={require('../../assets/images/logoVivara.jpg')} 
            style={styles.logo}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={()=> Alert.alert('Botão Pressionado')}
            >
                <Text style={styles.buttonText}>
                        Clique para entrar
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default HomeVivara;