import React from 'react';
import { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';

import { ExploreHeader } from 'src/components/ExploreHeader';
import { apis } from 'src/utils/apis';
import { Categories } from '../components/Categories';
import { PopularChallenges } from '../components/PopularChallenges';
import { challengeCategories, level1Tags } from '../utils/ChallengeCategories';

import allActions from 'src/store/actions';

const ExploreScreen = () => {
  const [banners, setBanners] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  // redux store
  const challenges = useSelector(store => store.challengesData);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBanners = async () => {
      try {
        const {
          data: {
            data: { banners },
          },
        } = await apis.getBanners();
        setBanners(banners);

        const {
          data: {
            data: { challenges },
          },
        } = await apis.getAllChallenges();
        dispatch(
          allActions.challengesDataActions.getChallengesData(challenges),
        );

        const {
          data: {
            data: { tags },
          },
        } = await apis.getAllTags();
        setTags(tags);
      } catch (e) {
        console.log(e);
      }
    };
    getBanners();
  }, []);

  const handleSelectedTabIndex = idx => {
    setSelectedTabIndex(idx);
  };

  console.log(banners);
  console.log(challenges);
  console.log(tags);

  const renderComponents = [
    {
      title: 'challenge-category',
      component: <Categories challengeCategories={challengeCategories} />,
    },
    {
      title: 'popular-challenge',
      component: (
        <PopularChallenges
          selectedTabIndex={selectedTabIndex}
          handleSelectedTabIndex={handleSelectedTabIndex}
          data={challenges
            .filter(
              challenge =>
                challenge.goal.goalCategory.level1 ===
                level1Tags[selectedTabIndex],
            )
            .splice(0, 4)}
        />
      ),
    },
  ];

  return banners.length !== 0 ? (
    <SafeAreaView style={styles.container}>
      <ExploreHeader />
      <Text>Carousel</Text>
      <FlatList
        keyExtractor={item => item.title}
        data={renderComponents}
        renderItem={({ item, index }) => item.component}
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 24,
  },
  wrapper: {
    flex: 1,
  },
  banner: {
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').width - 40) * (456 / 722),
  },
});

export default ExploreScreen;
