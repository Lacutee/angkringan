
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HistItem from '../const/histItem';
export default function Hist() {
  return (
    <View style={styles.container}>
      <HistItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(90, 90, 90, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
