import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../themes/appTheme';

const AlbumScreen = () => {

    const {authState, logout } = useContext(AuthContext);
    const {isLoggedIn } = authState;

    return (
        <View style={styles.globalMargen} >
            <Text style={styles.title} >AlbumScreen</Text>

            {
                isLoggedIn && <Button title='Logout' onPress={ logout} />
            }

        </View>
    )
}

export default AlbumScreen;
