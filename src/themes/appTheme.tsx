import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6',
    second: '#FFF',
} 

const styles = StyleSheet.create({
    globalMargen:{
        marginHorizontal: 20,
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
    },

    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 5,
    },

    botonGrandeTexto: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
     
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },

    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,

    },
    
    menuBoton: {
        marginVertical: 10,
    },
    menuTexto: {
        fontSize: 20,
    },

});


export default styles
