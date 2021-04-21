import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Tag = ({
  label,
  color = '#777',
  backgroundColor = '#f2f2f2',
  margin,
}) => {
  return (
    <View style={{ borderRadius: 4, overflow: 'hidden' }}>
      <Text
        style={{
          color,
          backgroundColor,
          fontWeight: '500',
          paddingVertical: 4,
          paddingHorizontal: 8,
          marginRight: margin,
          fontSize: 12,
        }}>
        {label}
      </Text>
    </View>
  );
};
