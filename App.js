import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      
        screenOptions={{
          header: () =>{
            return (
              <LinearGradient
              colors={["#3697e5", "#3679e0"]}
              start={{ y: 1, x: 0.9 }}
            >  
             <Header/>
            </LinearGradient>
            )
          }
        }}
      >
        <Stack.Screen 
          name='Home' 
          component={Home} 
        />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Signin' component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
