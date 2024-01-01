import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
// import NativeAnimatedHelper from '../NativeAnimatedHelper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Home from './pages/home/Home';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
        }}
        >
        <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{
          header: true
        }}
        />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Signin' component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
