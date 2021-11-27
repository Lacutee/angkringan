import React from "react";
import { StyleSheet, View } from "react-native";
import Header from './header';
import HomeItem from './homeItem';

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"

    }]}>
      <View style={[styles.header]} >
          <Header/>
      </View>

      <View style={{ flex: 6, backgroundColor: "rgba(90, 90, 90, 1)" }}>
          <HomeItem/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  header:{
      flex: 5,
      backgroundColor:"rgba(90, 90, 90, 1)"

 },
});

export default Flex;
