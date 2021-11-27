import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderItem from './headerItem';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () =>{
  return(
      <View style={styles.container}>
      <LinearGradient
        colors={['rgba(224, 0, 228, 1)', 'rgba(255, 0, 184, 1)']}
        style={styles.background}>
        <HeaderItem/>
      </LinearGradient>

      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:0,
    backgroundColor: 'rgba(90, 90, 90, 1)',
    // marginBottom:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,

    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    overflow: "hidden"

  },
  background:{
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    width: "100%",
    alignItems:"center",
    justifyContent:"center"

  }
});

export default Header;
