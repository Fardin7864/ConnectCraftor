import React from 'react';
import { useState } from 'react';
import { Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';


const Header = () => {
  // const [open, setOpen] = useState(false);
  const [open , setOpen ] = useState()

    return (
    <View style={{width: '100%', marginTop: '15%', marginLeft: 30}}>
    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
      Home
    </Text>
  </View>

)}

export default Header;