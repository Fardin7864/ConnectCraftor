import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient  colors={['#3697e5', '#3679e0']} start={{y:1,x:1}} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <LinearGradient
      // Button Linear Gradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      >
      <Text>Sign in with Facebook</Text>
    </LinearGradient>
  </LinearGradient>
  );
}