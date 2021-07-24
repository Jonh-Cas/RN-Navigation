import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import StackNavigation from './src/navegation/StackNavigation';
  // import MenuLateralBasico from './src/navegation/MenuLateralBasico';
  import MenuLateral from './src/navegation/MenuLateral';
import Tabs from './src/navegation/Tabs';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
     {/* <StackNavigation /> */}
     {/* <MenuLateralBasico /> */}
     <MenuLateral />
     {/* <Tabs /> */}

      </AppState>

    </NavigationContainer>
  )
}


const AppState = ({children }: any) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  );
}
export default App;
