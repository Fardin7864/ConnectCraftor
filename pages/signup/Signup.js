import { Icon, Input } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const Signup = () => {
  return (
    <LinearGradient
      colors={["#3697e5", "#3679e0"]}
      start={{ y: 1, x: 0.9 }}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
    <View style={{
    width: '80%',  
    padding: 20,
    // Shadow properties
    shadowColor: '#0f0f0f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 10
    }}>
      <Text style={{ fontSize: 40, color: "white", fontWeight: "700", alignSelf: 'center' }}>
        Sign Up
      </Text>
      <Input 
      placeholder="Enter Your Name" 
      inputStyle={{ color: 'white', fontSize: 20 }}
      labelStyle={{ color: '#fff', fontSize: 25}}
      label="Name" 
      placeholderTextColor="#FAE7F3"
      />
      <Input 
      placeholder="Email" 
      inputStyle={{ color: 'white', fontSize: 20 }}
      labelStyle={{ color: '#fff', fontSize: 25}}
      label="Email" 
      placeholderTextColor="#FAE7F3"
      />
      <Input 
      placeholder="Password" 
      inputStyle={{ color: 'white', fontSize: 20 }}
      labelStyle={{ color: '#fff', fontSize: 25}}
      label="Password" 
      placeholderTextColor="#FAE7F3"
      />
      </View>
    </LinearGradient>
  );
};

export default Signup;
