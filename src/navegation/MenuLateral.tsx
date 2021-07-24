import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, 
         DrawerContentComponentProps,
         DrawerContentOptions,
         DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import styles, { colores } from '../themes/appTheme';
import SettingsScreen from '../screens/SettingsScreen';
import Tabs from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {

  const {width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
        drawerType={(width > height) ?  'permanent' : 'front'  }
        drawerContent={ (props) =>  <MenuInterno {...props } />  }
        >
       <Drawer.Screen name="Tabs"  component={Tabs} />
       <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
       
    </Drawer.Navigator>
  );
}
export default MenuLateral;


const MenuInterno = ({navigation } : DrawerContentComponentProps<DrawerContentOptions> ) => {
  
  return (
    <DrawerContentScrollView>

        {/*Opciones de  avatar */ }
      <View style={styles.avatarContainer} >
        <Image source={{uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg' }}
               style={styles.avatar}
         />
      </View>

        {/* Opciones de Menu */}
        <View style={styles.menuContainer} >
          <TouchableOpacity style={styles.menuBoton}
                            onPress={ () => navigation.navigate('Tabs') }
          >
              <Text style={styles.menuTexto} > 
              <Icon name='boat-outline' size={20} color={colores.primary} />
              {' '} Navegacion </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuBoton}
                            onPress={ () => navigation.navigate('SettingsScreen') }
          >
              <Text style={styles.menuTexto} > 
              <Icon name='cog-outline' size={20} color={colores.primary} />
              {' '} Ajustes </Text>
          </TouchableOpacity>


        </View>

    </DrawerContentScrollView>
  );
}
