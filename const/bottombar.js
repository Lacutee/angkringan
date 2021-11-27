import React from "react";
import {StyleSheet, View} from 'react-native';
import HomeLogo from "./bottomLogo";
import { EditLogo } from "./bottomLogo";
import { SettingLogo } from "./bottomLogo";

const BottomBar = () =>{
    return(
      <View style={styles.container}>
            <HomeLogo/>
            <EditLogo/>
            <SettingLogo/>
      </View>
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
      paddingBottom: 0,
      elevation: 20,
      shadowOffset: { width: 0, height: -10, },
      flexDirection: "row",
      backgroundColor:'rgba(104, 104, 104, 1)'
  
    },
  });
  
  export default BottomBar;
  