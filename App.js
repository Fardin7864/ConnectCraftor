import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Signup from './pages/signup/Signup';
// import NativeAnimatedHelper from '../NativeAnimatedHelper';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackground: () => (
            <LinearGradient
              colors={['#3697e5', '#3679e0']}
              start={{ y: 1, x: 0.9 }}
              style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}
            />
          ),
          headerTitleStyle: { color: 'white' },
        }}
      >
        <Stack.Screen name=' ' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
