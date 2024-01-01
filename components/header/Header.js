// import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import { Drawer } from 'react-native-drawer-layout';

const Header = ({headerName}) => {
    return (
    <View style={{width: '100%', height: "10%", marginTop: '15%', marginLeft: 30}}>
    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
      {headerName}
    </Text>
  </View>
)}

export default Header;