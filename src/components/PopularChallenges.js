import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { FREQUENCIES, PERIODS } from '../constants/wording';
import { calcStartDay } from '../utils/CalcStartDay';
import { Card } from './Card';
import { PopularChallengeTab } from './PopularChallengeTab';

const NUM_OF_COLUMNS = 2;
const IMAGE_HEIGHT_RATIO = 0.75;
//tmp
const PADDING_HORIZONTAL = 40;

export const PopularChallenges = ({
  selectedTabIndex,
  handleSelectedTabIndex,
  data,
}) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={styles.title}>인기 챌린지</Text>
      <PopularChallengeTab
        selectedTabIndex={selectedTabIndex}
        handleSelectedTabIndex={handleSelectedTabIndex}
      />
      <View style={styles.grid}>
        {data.map(challenge => (
          <Card
            key={challenge.id}
            title={challenge.title}
            startDate={calcStartDay(new Date(challenge.registerEndDate))}
            imageUrl={challenge.thumbnailImageUrls.f}
            width={
              (Dimensions.get('window').width - PADDING_HORIZONTAL) /
              NUM_OF_COLUMNS
            }
            height={
              ((Dimensions.get('window').width - PADDING_HORIZONTAL) /
                NUM_OF_COLUMNS) *
              IMAGE_HEIGHT_RATIO
            }
            tags={[
              FREQUENCIES.find(freq => freq.id === challenge.goal.frequency)
                .text,
              PERIODS.find(per => per.id === challenge.goal.period).text,
            ]}
            registerCount={challenge.registerInfo.registerCount}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: Dimensions.get('window').width / NUM_OF_COLUMNS - PADDING_HORIZONTAL,
    justifyContent: 'center',
  },
});
