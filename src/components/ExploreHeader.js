import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ExploreHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: '80%' }}
        onPress={() =>
          navigation.navigate({
            routeName: 'Search',
          })
        }>
        <View style={styles.input}>
          <Text style={{ color: '#727272', fontWeight: '600' }}>
            어떤 습관을 가지고 싶으신가요?
          </Text>
        </View>
      </TouchableOpacity>
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
    width: '100%',
    height: 32,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
});
