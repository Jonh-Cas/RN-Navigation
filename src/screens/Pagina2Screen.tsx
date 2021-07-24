import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../themes/appTheme';



const Pagina2Screen = (  ) => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Hola mundo',
            headerBackTitle: 'Atras',
        })
    }, [])


    return (
        <View style={styles.globalMargen} >
            <Text style={styles.title} >Pagina 2 screen</Text>

            <Button  title='Ir a pagina 3'
                     onPress={() => navigation.navigate('Pagina3Screen') }
                 />   
        </View>
    )
}

export default Pagina2Screen;
