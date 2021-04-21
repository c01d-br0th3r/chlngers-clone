import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ExploreHeader = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        blurOnSubmit={true}
      />
      <Icon name="bookmark" size={20} color="#c2c2c2" />
      <Icon name="heart" size={20} color="#c2c2c2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    height: 32,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
  },
});
