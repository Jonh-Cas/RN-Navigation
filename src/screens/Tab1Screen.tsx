import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native'
import styles, { colores } from '../themes/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const myIcon = <Icon name="rocket" size={60} color={colores.primary} />;


const Tab1Screen = () => {

    const {top}= useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screeneffect');
    }, [])

    return (
        <View style={{
            ...styles.globalMargen,
            marginTop: top + 20,
        }} >
            <Text style={styles.title} >Iconos  </Text>
            <Text>
             <TouchableIcon iconName='airplane-outline' />
             <TouchableIcon iconName='attach-outline'  />
             <TouchableIcon iconName='bonfire-outline' />
             <TouchableIcon iconName='hardware-chip-outline'  />
             <TouchableIcon iconName='leaf-outline'  />
             <TouchableIcon iconName='images-outline'  />
             <TouchableIcon iconName='headset-outline' />
             <TouchableIcon iconName='basketball-outline' />
            </Text>


        </View>
    )
}

export default Tab1Screen;
