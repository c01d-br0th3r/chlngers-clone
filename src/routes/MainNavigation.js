import React from 'react';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ExploreScreen from 'src/screens/ExploreScreen';
import AuthenticationScreen from 'src/screens/AuthenticationScreen';
import FeedScreen from 'src/screens/FeedScreen';
import GenerateScreen from 'src/screens/GenerateScreen';
import MyPageScreen from 'src/screens/MyPageScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchScreen from '../screens/SearchScreen';

const ExploreStackNavigator = createStackNavigator(
  {
    Explore: {
      screen: ExploreScreen,
    },
    Search: {
      screen: SearchScreen,
    },
  },
  { headerMode: 'none' },
);

const MainBottomTabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreStackNavigator,
      navigationOptions: {
        title: '탐색',
        tabBarIcon: tabInfo => (
          <Icon
            name="home"
            size={20}
            color={tabInfo.focused ? '#121212' : '#a2a2a2'}
          />
        ),
      },
    },
    Generate: {
      screen: GenerateScreen,
      navigationOptions: {
        title: '개설',
        tabBarIcon: tabInfo => (
          <Icon
            name="door-open"
            size={20}
            color={tabInfo.focused ? '#121212' : '#a2a2a2'}
          />
        ),
      },
    },
    Authenticatoin: {
      screen: AuthenticationScreen,
      navigationOptions: {
        title: '인증',
        tabBarIcon: tabInfo => (
          <Icon
            name="camera"
            size={20}
            color={tabInfo.focused ? '#121212' : '#a2a2a2'}
          />
        ),
      },
    },
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        title: '피드',
        tabBarIcon: tabInfo => (
          <Icon
            name="border-all"
            size={20}
            color={tabInfo.focused ? '#121212' : '#a2a2a2'}
          />
        ),
      },
    },
    MyPage: {
      screen: MyPageScreen,
      navigationOptions: {
        title: '마이페이지',
        tabBarIcon: tabInfo => (
          <Icon
            name="users"
            size={20}
            color={tabInfo.focused ? '#121212' : '#a2a2a2'}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#121212',
      labelStyle: {
        fontWeight: '600',
      },
    },
  },
);

export default createAppContainer(MainBottomTabNavigator);
