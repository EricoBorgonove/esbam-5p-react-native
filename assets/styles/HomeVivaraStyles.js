import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa687',
    },
    logo:{
        width:300,
        height: 450,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    button:{
        backgroundColor: '#FFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText:{
        color: '#ffa687',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default styles;

/* opções do resizeMode
cover : cobre todo o espaço disponivel
contain: ajusta a imagem sem cortar
stretch: deforma a imagempara caber
center: centraliza sem redimensionar
*/