import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import CustomButton from '../Button';
import styles from './styles.js';
function index({ image, title, subTitle }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          type="primary"
          buttonText="Custom Order"
          onPress={() => console.warn('Custom button pressed')}
        />
        <CustomButton
          type="secondary"
          buttonText="Existing Inventory"
          onPress={() => console.warn('Existing Inventory pressed')}
        />
      </View>
    </View>
  );
}

export default index;
