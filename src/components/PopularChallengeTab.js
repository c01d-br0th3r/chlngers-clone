import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { level1Tags } from '../utils/ChallengeCategories';

export const PopularChallengeTab = ({
  selectedTabIndex,
  handleSelectedTabIndex,
}) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <FlatList
        keyExtractor={item => item}
        horizontal
        data={level1Tags}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleSelectedTabIndex(index)}>
            <View
              style={{
                height: 28,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  selectedTabIndex === index ? '#f53257' : '#fff',
                borderRadius: 36,
              }}>
              <Text
                style={{
                  ...styles.item,
                  color: selectedTabIndex === index ? '#fff' : '#a2a2a2',
                }}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 60,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
