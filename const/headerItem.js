import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderItem = () =>{
  return(
        <View style={{flex:1,
                      flexDirection:'row',
                      justifyContent: 'center',
                      alignItems: 'center'}}>
            <Text style={styles.first}>Rp </Text>
            <Text style={styles.last}>120.000</Text>
        </View>
  );
};

const styles = StyleSheet.create({
    first:{
      fontSize: 40,
      fontFamily: 'Roboto',
      fontWeight: "bold",
      color:'white'
    },
    last:{
      fontSize: 40,
      fontFamily: 'Roboto',
      fontWeight: "100",
      color:'white'
    }
});



export default HeaderItem;
