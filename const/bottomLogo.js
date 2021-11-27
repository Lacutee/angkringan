import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import {Icon} from 'react-native-elements'
  
  const HomeLogo = () =>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={{padding:0}}>
        <Icon
          reverse
          name='home'
          type='material-icons'
          color='#686868'
        />
        </TouchableOpacity>
        </View>
    );
  };
  const EditLogo = () =>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={{padding:0}}>
        <Icon
          reverse
          name='edit'
          type='material-icons'
          color='#686868'
        />
        </TouchableOpacity>
        </View>
    );
  };
  
  const SettingLogo = () =>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={{padding:0}}>
        <Icon
          reverse
          name='attach-money'
          type='material-icons'
          color='#686868'
        />
        </TouchableOpacity>
        </View>
    );
  };
  
  const styles = StyleSheet.create(
    {
      container:{
  
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // borderLeftWidth:6,
        // borderRightWidth:6,
        // borderBottomWidth:6,
        // borderBottomLeftRadius:'30%',
        // borderBottomRightRadius:'30%',
        // margin:'25%',
      },
      logo:{
        width: 50,
        height: 50,
      }
    }
  )
  
  
  
  
  export default HomeLogo;
  export {EditLogo, SettingLogo};
  