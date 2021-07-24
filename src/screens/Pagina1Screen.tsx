import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native';
import styles, { colores } from '../themes/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps <any, any>{};
// interface Props extends StackScreenProps <any, any>{};

const Pagina1Screen = ({navigation}: Props ) => {

    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => 
            
            <TouchableOpacity onPress={() => navigation.toggleDrawer() } 
                style={{backgroundColor: colores.primary, marginLeft: 10,  }}
            >         
                    <Icon name='grid-outline' size={35} color={colores.second} />
                
            </TouchableOpacity>

            // <Button title= 'Menu'
            //         onPress={() => 
            //             navigation.toggleDrawer() }  />
        })

    }, [])


    return (
        <View style={styles.globalMargen} >
            <Text style={styles.title} >Pagina 1 screen</Text>
            <Button  title='Ir a Pagina 2'
                     onPress={() => navigation.navigate('Pagina2Screen') } />
                     <Text style={{marginTop: 20, fontSize: 20, marginLeft: 5 }} > Navegacion con arugumentos </Text>
            <View style={{flexDirection: 'row'}} >
             <TouchableOpacity 
                style={{...styles.botonGrande, backgroundColor: '#5856D6'  }}
                onPress={() => navigation.navigate('PersonaScreen', { 
                    id: 1, 
                    name: 'Pedro', 
                })} >
                    
                 <Text style={styles.botonGrandeTexto} > Pedro </Text>
                 <Text>
                      <Icon name='male-outline' size={20} color={colores.second} />
                 </Text>
             </TouchableOpacity>

             <TouchableOpacity 
                style={{...styles.botonGrande, backgroundColor: '#ff9427' }}
                onPress={() => navigation.navigate('PersonaScreen', { 
                    id: 2, 
                    name: 'Maria', 
                })} >
                 <Text style={styles.botonGrandeTexto} > Maria </Text>
                    <Text>
                    <Icon name='female-outline' size={20} color={colores.second} />

                    </Text>

             </TouchableOpacity>

            </View>

        </View>
    )
}

export default Pagina1Screen;
