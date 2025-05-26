import React, {useState} from "react";

import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function Cadastro ({navigation, addUsuario}){
    const [name, setName] = useState('');
    const [age, setAge] = useState ('');

    const cadastrar = () => {
        if (name && age){
            addUsuario({id:Date.now(), name, age})
            setName('')
            setAge('')
            navigation.navigate('Lista')
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Nome: </Text>
            <TextInput style={styles.input}
                value={name}
                onChange={setName}
                placeholder="Digite o Nome"
            />
            <Text style={styles.label}>Idade: </Text>
            <TextInput style={styles.input}
                value={age}
                onChange={setAge}
                keyboardType="numeric"
                placeholder="Digite a Idade"
            />
            <Button title="Cadastrar" onPress={cadastrar}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {paddind: 20, margin:10},
    label: {marginTop: 10},
    input: {borderWidth: 1, marginBottom: 10, padding: 5},
})