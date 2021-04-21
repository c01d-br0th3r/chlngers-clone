import React, { Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export const Categories = ({ challengeCategories }) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={styles.title}>챌린지 카테고리</Text>
      <View style={styles.grid}>
        {challengeCategories.map((category, idx) => (
          <TouchableOpacity activeOpacity={0.7} key={idx}>
            <View style={styles.container}>
              <Icon name={category.iconName} size={24} color="#a2a2a2" />
              <Text style={styles.categoryLabel}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 32) / 5,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  categoryLabel: {
    marginTop: 8,
  },
});
