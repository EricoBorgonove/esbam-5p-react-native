import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Cadastro({ navigation, addUsuario }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    const handleCadastro = () => {
        addUsuario({
            name: nome,
            age: idade
        });
        navigation.navigate('Lista');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite a idade"
                keyboardType="numeric"
                value={idade}
                onChangeText={setIdade}
            />
            <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 8,
    },
});
