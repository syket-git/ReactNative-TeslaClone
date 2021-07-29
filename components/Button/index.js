import React from 'react';
import { Pressable, View, Text } from 'react-native';
import styles from './styles';

function index({ type, buttonText, onPress }) {
  const background = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#ffffff' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: background }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

export default index;
