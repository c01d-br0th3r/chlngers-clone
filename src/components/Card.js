import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { Tag } from './Tag';

export const Card = ({
  title,
  imageUrl,
  width,
  height,
  startDate,
  tags,
  registerCount,
}) => {
  return (
    <TouchableOpacity>
      <View style={{ marginBottom: 32 }}>
        <ImageBackground
          source={{ uri: imageUrl }}
          style={{ width, height, ...styles.image }}
          resizeMode="cover"
          imageStyle={{ borderRadius: 4 }}>
          <Tag
            label={`${registerCount}명`}
            color="#fff"
            backgroundColor="rgba(12, 12, 12, 0.6)"
            opacity={0.8}
          />
        </ImageBackground>
        <Text style={styles.public}>공식 챌린지</Text>
        <View style={styles.row}>
          <Text style={styles.wrap}>{title}</Text>
        </View>
        <Text style={styles.date}>{startDate}</Text>
        <View style={styles.tags}>
          {tags.map((tag, idx) => (
            <Tag key={idx} label={tag} margin={4} />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    alignItems: 'flex-end',
    padding: 8,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  public: {
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 4,
    color: '#727272',
  },
  wrap: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    fontWeight: '600',
    color: '#727272',
    marginBottom: 4,
  },
  tags: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
