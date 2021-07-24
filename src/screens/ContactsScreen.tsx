import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {

    const {signIn, authState } = useContext(AuthContext);
    const {isLoggedIn } = authState;

    return (
        <View style={styles.globalMargen} >
            <Text style={styles.title} >ContactsScreen</Text>
            {!isLoggedIn && <Button title='SignIn' onPress={signIn}  />
            }
        </View>
    )
}

export default ContactsScreen;
