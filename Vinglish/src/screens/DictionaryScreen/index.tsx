import React, {useEffect, useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import ScreenWrapper from '../../components/ScreenWrapper';
import SearchBarComponent from '../../components/SearchBar';
import {styles} from './style';
import {PageHeader} from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import {DictionaryData} from '../../types/dictionary';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../themes/font';
import {COLORS} from '../../themes/colors';

const Dictionary = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [wordData, setWordData] = useState<DictionaryData>([]);
  const [error, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

  function getData() {
    inputQuery &&
      axios
        .get(dictionaryApiUrl)
        .then(response => {
          setWordData(response.data);
        })
        .catch(error => {
          setIsError(true);
          setErrorMessage(error.response?.data?.title);
        });
  }

  useEffect(() => {
    if (inputQuery === '') {
      setWordData([]);
    }
  }, [inputQuery]);

  // Sound && Sound.setCategory('Playback');

  // const ding = new Sound(
  //   'https://api.dictionaryapi.dev/media/pronunciations/en/gentle-us.mp3',
  //   Sound.MAIN_BUNDLE,
  //   error => {
  //     if (error) {
  //       console.log('error');
  //       return;
  //     }
  //     console.log('duration: ');
  //   },
  // );

  console.log(wordData);

  const handlePlay = () => {
    // ding.play(success => {
    //   if (success) {
    //     console.log('success');
    //   } else {
    //     console.log('error');
    //   }
    // });
  };

  return (
    <PageHeader title="Dictionary" variant="PRIMARY">
      <ScreenWrapper>
        <ScrollView>
          <View style={styles.searchContainer}>
            <SearchBarComponent
              onChange={value => setInputQuery(value)}
              value={inputQuery}
              placeholder="Search your word..."
              onPress={getData}
            />
            {wordData.length === 0 || inputQuery === '' ? (
              <Image
                source={require('../../assets/images/preview.jpg')}
                alt="preview"
                style={styles.image}
              />
            ) : (
              <>
                <View>
                  {wordData.map(data => {
                    return (
                      <View key={data.phonetic}>
                        <View style={styles.dataContainer}>
                          {/* <Text style={styles.inputQuery}>{inputQuery}</Text> */}
                          <Text style={styles.phonetic}>{data.phonetic}</Text>
                          {data?.meanings.map((meaning, index) => {
                            return (
                              <View key={index}>
                                <Spacer space={18} />
                                <Text>{`Parts of speech: ${meaning.partOfSpeech}`}</Text>
                                <TouchableOpacity onPress={handlePlay}>
                                  <Icon
                                    name="audio"
                                    size={FONTSIZES.lg}
                                    color={COLORS.tertiary}
                                  />
                                </TouchableOpacity>
                                <Spacer space={12} />
                                {meaning.definitions.map(definition => {
                                  return (
                                    <View
                                      style={styles.definitionContainer}
                                      key={definition.example}>
                                      <Text
                                        style={
                                          styles.definition
                                        }>{`Definition: ${definition.definition}`}</Text>
                                      <Spacer />
                                      {definition.example && (
                                        <Text
                                          style={
                                            styles.example
                                          }>{`Example: ${definition.example}`}</Text>
                                      )}
                                    </View>
                                  );
                                })}
                                {meaning.synonyms.length !== 0 && (
                                  <Text
                                    style={[
                                      styles.definition,
                                      styles.synonym,
                                    ]}>{`Synonyms: ${meaning.synonyms}`}</Text>
                                )}
                              </View>
                            );
                          })}
                        </View>
                      </View>
                    );
                  })}
                </View>
              </>
            )}
            {/* {error && (
              <>
                <Image
                  source={require('../../assets/images/noData.jpg')}
                  alt="no-data"
                  style={styles.image}
                />
              </>
            )} */}
          </View>
        </ScrollView>
      </ScreenWrapper>
    </PageHeader>
  );
};

export default Dictionary;
