import { Icon, Input, Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, View } from "react-native";

const Signup = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const onChange = (e) => { 
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]:value
        })
     }

     const handleSubmit = () => { 
        console.log(formData)
      }

    //   console.log(navigation)

     
  return (
    <LinearGradient
      colors={["#3697e5", "#3679e0"]}
      start={{ y: 1, x: 0.9 }}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View
        style={{
          width: "80%",
          padding: 20,
          borderRadius: 10,
          borderWidth: 0.5,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            color: '#FF9800',
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          Sign Up
        </Text>
        <Input
          placeholder="Enter Your Name"
          inputStyle={{ color: "white", fontSize: 20 }}
          labelStyle={{ color: "#fff", fontSize: 25 }}
          label="Name"
          placeholderTextColor="#FAE7F3"
          onChangeText={(value) => onChange({target:{name:'name',value}})}
        />
        <Input
          placeholder="Email"
          inputStyle={{ color: "white", fontSize: 20 }}
          labelStyle={{ color: "#fff", fontSize: 25 }}
          label="Email"
          placeholderTextColor="#FAE7F3"
          onChangeText={(value) => onChange({target:{name:'email',value}})}
        />
        <Input
          placeholder="Password"
          inputStyle={{ color: "white", fontSize: 20 }}
          labelStyle={{ color: "#fff", fontSize: 25 }}
          label="Password"
          placeholderTextColor="#FAE7F3"
          onChangeText={(value) => onChange({target:{name:'password',value}})}
        />
        <Button
          ViewComponent={LinearGradient} 
          linearGradientProps={{
            colors: ["#FF9800", "#F44336"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          radius={50}
          titleStyle={{fontSize: 20, fontWeight: '700'}}
          onPress={handleSubmit}
        >
         Sign Up
        </Button>
        <Text style={{fontSize: 18 , color: "yellow", alignSelf: 'center', marginTop: 10}}>Already have acount? <Text onPress={() => navigation.navigate('Signin')} style={{fontSize: 19, color: "#F44336"}}>Sign In</Text></Text>
      </View>
    </LinearGradient>
  );
};

export default Signup;
