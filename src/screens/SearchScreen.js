import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [recentTerms, setRecentTerms] = useState([]);
  const [isKeyboardUp, setIsKeyboardUp] = useState(false);

  useEffect(() => {
    const getRecentTerms = async () => {
      try {
        // only for __dev__: clear AsyncStorage
        // await AsyncStorage.clear();
        const recentTermsInAsyncStorage = await AsyncStorage.getItem(
          '@recent_terms',
        );
        if (!recentTermsInAsyncStorage) return;
        const recentTerms = JSON.parse(recentTermsInAsyncStorage);
        setRecentTerms(recentTerms);
      } catch (e) {
        console.log(e);
      }
    };
    getRecentTerms();
  }, []);

  const handleSubmit = async ({ nativeEvent }) => {
    const currentTerm = nativeEvent.text;
    const id = new Date().getTime();

    setIsKeyboardUp(false);
    setTerm(currentTerm);

    const currentTermObj = {
      id,
      text: currentTerm,
    };
    if (currentTerm.length !== 0) {
      setRecentTerms(terms => [currentTermObj, ...terms]);
    }

    try {
      const recentTermsArrayAsString = JSON.stringify([
        currentTermObj,
        ...recentTerms,
      ]);
      await AsyncStorage.setItem('@recent_terms', recentTermsArrayAsString);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async id => {
    const targetTerm = recentTerms.filter(term => term.id !== id);
    setRecentTerms(targetTerm);
    try {
      const recentTermsArrayAsString = JSON.stringify(targetTerm);
      await AsyncStorage.setItem('@recent_terms', recentTermsArrayAsString);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(term);
  console.log(recentTerms);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Icon name="chevron-left" size={20} color="#121212" />
          </View>
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.input}
            placeholder="검색"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={handleSubmit}
            onFocus={() => setIsKeyboardUp(true)}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Text>취소</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {isKeyboardUp ? (
          <View style={styles.lst}>
            {recentTerms.map(term => (
              <View style={styles.list}>
                <Text key={term.id}>{term.text}</Text>
                <TouchableWithoutFeedback onPress={() => handleDelete(term.id)}>
                  <Icon name="times" size={16} color="#626262" />
                </TouchableWithoutFeedback>
              </View>
            ))}
          </View>
        ) : (
          <Text>Down</Text>
        )}
      </View>
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
  header: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d2d2d2',
  },
  input: {
    width: Dimensions.get('window').width * 0.68,
    height: 36,
    backgroundColor: '#f2f2f2',
    paddingVertical: 0,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%',
    padding: 20,
  },
  list: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
});

export default SearchScreen;
