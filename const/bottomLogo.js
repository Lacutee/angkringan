import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';


const screens = {
    Home:{
      screen: Flex
    },
    Edit:{
      screen: Edit
    }
  }
  
  const HomeStack = createStackNavigator(screens);
  
  const HomeLogo = () =>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={{padding:0}}>
        <Image
        style={styles.logo}
        source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATSSURBVHgB7Z1LaFxVHMa/CaLia+VKcCHqThRxrQhWacG6bBVFcOHCrlTw0eckiqWgWEXcSXWXLnThzvooRUXwARYFNzZaJYIiPojSpI/k9PvP3AlJm0zm3Hvunf+Z+X7w5c4kdyaZ85tz7jn/mdwBMiaEcAnzCDPN/MicZk4x3zPvM9tsH4jmYcNvLkRsxAnmTojmYIM/F+JYYHZC1A8buh3Kscg8DVEfbOCpUA2TtA8iPUXPWQrVkaTUJJSzkl0Q1WAjTtQkp4d6UlkKOftqlNNDPakMod6ecyFPQgxOKD+VrsIeiI1hQ+0Nw0PDXT+GLKeHJg5rEXzIMWydtIeZgOgShnPM6UdHEoRLOT1UcQh+5fQY3wJrqF74bIrx60mh2UVoCsZHUshPzkpGd50U6i98NsXo9aTQXOGzKUarJ4XR6DkXMhoF1uB/Kl2FvBezoTusjTp5DndhPOT0yGviEMZLjpFPgTWM9jGnH7UUWFtICP/ANjeTGF+WmKlWq/UCEpFMkOQsY5KeoaRXkYAkYybl2DNmEsKwNn05JJo4VBZU9By9uLUaa9d2CkmVhrhCThuJj2Ujxm4Od/tRklING7rTyb2QnEFpl504RDduIceGtElITgylelIZQRrWyvMUJb0Wc4OoScKKqbTklONg7GJ24IYuZiRTECkYeLgbqAdJTnJeGnQKvmEPkpzasIqDHTL2szctrbdT3x5UHHMkpx6s7a1t+76etG4PUm2tMfoWWNcUJDmNs26B9aIhToXPobBugXWVIBU+h8qaBdblIY4/2M3Ni9Ai1APLFYeODMq5m5sjzKUQXriPkj5qUc5VvHKcuRHCE98xd9i4twWS45FbmS0m6GEIrzxogm6C8Mrtdgya54XLITwybz1I02q/LJqgXyG8MmOCvoTwSkfQEQivvG2TBDuv9LfMLRCeOMFKws0T/HKOV3ZAeOI085hd6FSzKekzbp6H8MAiuq8NfW5XVk2xOdw9wc0rzBUQw+BfZgflTPe+cdEaiJKsLmevlW9lroFogr+Zo+i+RfiHlT/o956Ea7nZxNyArijb145VV0NU4X/mTXSHsv+Yn5gvKGZ2rZ2jqgiU9hs310FUYZYyrh90Z51V0DkS5BwJco4EOUeCnCNBzpEg50iQc3L8CMs55mPmA3RrV4Ng1Q+rijzAXImMyE3Qp8yjXIn/gngOFXXG95jbkAk5DXEnmW0l5XTgbWe42VzcVxbkJOgAG/gPVIT38Ts3B5EJOQl6F+l4hwnIgFwELfCZ/xcSwfuyicYZZEAugrJ4tteB1kHOkSDnSJBzJMg5EuQcCXKOBDlHgpwjQc6RIOdIkHMkyDkS5BwJco4EOSdW0AJEVeZjdo4VdBKiKj/H7Bwr6BhEVT6J2TlW0IcQVTkWs3OUoFarZaeNOQ5RFmu/r2NuUGYW9yxEGeyEIbv4JI96A0y0IDvRKTeHIGJ5nW13NPI2pT8izd7TbQe7u9AM83xwSU+uwcdgS4bL0Ax2wqr7i9PuRFFqoVr8onuZw2iGU0jPHJrhLWZrGTlG6UoCf+EZ5iFe3M7MoF7eQHqmUS92xpDtbKPHmbMYJvbBg8w9zGHmG+YfZilU509mJ1PLCdd5vweY2VAde6xzzFeM/ZvLppDog9fPAzPOvhbZ16THAAAAAElFTkSuQmCC"
        }} />
        </TouchableOpacity>
        </View>
    );
  };
  const EditLogo = () =>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={{padding:0}}>
        <Image
        style={styles.logo}
        source={{uri:"data:image/png;base64,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"
        }} />
        </TouchableOpacity>
        </View>
    );
  };
  
  const SettingLogo = () =>{
    return(
        <View style={styles.container}>
        <TouchableOpacity style={{padding:0}}>
        <Image
        style={styles.logo}
        source={{uri:"data:image/png;base64,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"
        }} />
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
        width: 30,
        height: 30,
      }
    }
  )
  
  
  
  
  export default HomeLogo;
  export {EditLogo, SettingLogo};
  