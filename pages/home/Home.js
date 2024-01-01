import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from '../../components/header/Header';

const Home = () => {
    return (
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <LinearGradient
            colors={["#3697e5", "#3679e0"]}
            start={{ y: 1, x: 0.9 }}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Header headerName="Home"/>
            <View>
              <Text>This is Home!</Text>
            </View>
          </LinearGradient>
        </KeyboardAwareScrollView>
    );
    
};

export default Home;