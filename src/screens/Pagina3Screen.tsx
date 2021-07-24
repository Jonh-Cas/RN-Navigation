import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import styles from '../themes/appTheme';

interface Props extends StackScreenProps <any, any>{};

const Pagina3Screen = ({navigation }: Props) => {
    return (
        <View style={styles.globalMargen } >
            <Text style={styles.title} >Pagina 3 screen</Text>

            <Button  title='Ir a pagina 3 '
                     onPress={() => navigation.pop() }
                 /> 
            <Button  title='Ir al Home '
                     onPress={() => navigation.popToTop() }
                 /> 

        </View>
    )
}

export default Pagina3Screen;
