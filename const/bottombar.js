import React from "react";
import {StyleSheet, View} from 'react-native';
import Flex from "../screens/home";
import Edit from "../screens/Edit";
import Hist from "../screens/hist";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomBar = () =>{
    return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Edit') {
              iconName = focused ? 'edit' : 'edit';
            } else if (route.name === 'Hist'){
              iconName = focused ? 'bar-chart' : 'bar-chart';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Flex} />
        <Tab.Screen name="Edit" component={Edit} />
        <Tab.Screen name="Hist" component={Hist} />
      </Tab.Navigator>
      // <View style={styles.container}>
      //       <HomeLogo/>
      //       <EditLogo/>
      //       <SettingLogo/>
      // </View>
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      // paddingTop: 0,
      // paddingBottom: 0,
      // elevation: 20,
      // shadowOffset: { width: 0, height: -10, },
      // flexDirection: "row",
      // backgroundColor:'rgba(104, 104, 104, 1)'
      
    },
  });
  
  export default BottomBar;
  