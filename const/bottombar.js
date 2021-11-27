import React from "react";
import {StyleSheet, View} from 'react-native';


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
      paddingTop: 20,
      paddingBottom: 20,
      elevation: 20,
      flexDirection: "row",
  
    },
  });
  
  export default BottomBar;
  