import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainLogin from '../Screens/login/login';
import SignUpPublic from '../Screens/public-sign-up/sign';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> */}
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={MainLogin} />
            <Drawer.Screen name="Sign-up" component={SignUpPublic} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;