import React from 'react';
import { Platform, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigation from './StackNavigation';
import { colores } from '../themes/appTheme';
import ToptabNavigator from './TopTabNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs  = () =>{

  return Platform.OS === 'ios' 
         ? <TabsIOS />
         : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused })=> {
   
          let iconName;
          switch (route.name) {
            case 'Tab1Screen':
              iconName= <Icon name='browsers-outline' size={20} color={colores.second} />
              break;
  
            case 'Tab2Screen':
              iconName= <Icon name='calendar-outline' size={20} color={colores.second} />
              break;
  
            case 'StackNavigation':
              iconName= <Icon name='battery-charging-outline' size={20} color={colores.second} />
              break;
  
          }
  
          return <Text style={{color }} >{iconName } </Text>
        }
      }) }
    >
      {/* <Tab.Screen name="Tab1Screen"      options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}} >T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabAndroid.Screen name="Tab1Screen"      options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen"      options={{title: 'Tab2'}} component={ToptabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigation" options={{title: 'Stack'}} component={StackNavigation} />
    </BottomTabAndroid.Navigator>
  );
}





const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white',
      
    }}
    tabBarOptions={{
      activeTintColor: colores.primary,
      style: {
        borderColor: colores.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      labelStyle: {
        fontSize: 15
      },
    }}

    screenOptions={({route}) => ({
      tabBarIcon: ({color, focused, size })=> {
 
        let iconName: string = '';
        switch (route.name) {
          case 'Tab1Screen':
            iconName= 'browsers-outline';
            break;

          case 'Tab2Screen':
            iconName= 'calendar-outline';
            break;

          case 'StackNavigation':
            iconName= 'battery-charging-outline';
            break;

        }

        return <Icon name={iconName } size={20} color={color} />
      }
    }) }
    >
      {/* <Tab.Screen name="Tab1Screen"      options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}} >T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen"      options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen"      options={{title: 'Tab2'}} component={ToptabNavigator} />
      <BottomTabIOS.Screen name="StackNavigation" options={{title: 'Stack'}} component={StackNavigation} />

    </BottomTabIOS.Navigator>
  );
}

export default Tabs;