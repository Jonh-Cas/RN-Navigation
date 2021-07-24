import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import styles, { colores } from '../themes/appTheme';

const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

        const {authState } = useContext(AuthContext);

        

    return (
        <View style={{...styles.globalMargen,  marginTop: insets.top + 20 } } >
            <Text style={styles.title} > Settings Screens </Text>
            <Text> { JSON.stringify(authState, null, 3) } </Text>

            {
                authState.favoriteIcon && (
                    <Icon name={authState.favoriteIcon}
                          size={150}
                          color={colores.primary} />
                )

            }

        </View>
    )
}

export default SettingsScreen;
