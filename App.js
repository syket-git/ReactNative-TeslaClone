import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        image={require('./assets/images/ModelS.jpeg')}
        title="Model S"
        subTitle="Order Online for"
        subTitleCTA="Touchless Delivery"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
