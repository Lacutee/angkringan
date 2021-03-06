
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditItem from '../const/editItem';

export default function Edit() {
  return (
    <View style={styles.container}>
      <EditItem/>
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
