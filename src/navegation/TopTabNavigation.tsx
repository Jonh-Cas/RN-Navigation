import React from 'react';
import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const ToptabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets()

  return (
    <Tab.Navigator
        style={{paddingTop}}
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        tabBarOptions={{
            pressColor: colores.primary,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: colores.primary,
            },
            style: {
                shadowColor: 'transparent',
                elevation: 0,
              },
        }}

        screenOptions={({route}) => ({
            tabBarIcon: ({color, focused })=> {
       
              let iconName;
              switch (route.name) {
                case 'Chat':
                  iconName= <Icon name='chatbox-ellipses-outline' size={20} color={colores.primary} />
                  break;
                  
                case 'Contacts':
                  iconName= iconName= <Icon name='people-circle-outline' size={20} color={colores.primary} />
                  break;
      
                case 'Album':
                  iconName= <Icon name='book-outline' size={20} color={colores.primary} />;
                  break;
      
              }
      
              return <Text style={{color }} >{iconName } </Text>
            }
          }) }

    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}

export default ToptabNavigator;