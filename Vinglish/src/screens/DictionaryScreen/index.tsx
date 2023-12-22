import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import axios from 'axios';
import ScreenWrapper from '../../components/ScreenWrapper';
import SearchBarComponent from '../../components/SearchBar';
import {styles} from './style';
import {PageHeader} from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import {DictionaryData} from '../../types/dictionary';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FONTSIZES} from '../../themes/font';
import {COLORS} from '../../themes/colors';
import LottieView from 'lottie-react-native';
import AwesomeLoading from 'react-native-awesome-loading';

const Dictionary = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [wordData, setWordData] = useState<DictionaryData>([]);
  const [error, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [pronunciation, setPronounciation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

  function getData() {
    setIsLoading(true);
    inputQuery &&
      axios
        .get(dictionaryApiUrl)
        .then(response => {
          setWordData(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          setIsError(true);
          setErrorMessage(error.response?.data?.title);
          setIsLoading(false);
        });
  }

  useEffect(() => {
    if (inputQuery === '') {
      setWordData([]);
    }
  }, [inputQuery]);

  useEffect(() => {
    wordData.length !== 0 &&
      wordData.map(data => {
        const audioPronounciation = data.phonetics.filter(
          item => item.audio && item.audio.includes('us.mp3'),
        );
        setPronounciation(audioPronounciation[0].audio);
      });
  });

  const handlePlay = () => {
    try {
      SoundPlayer.playUrl(pronunciation);
    } catch (e) {
      console.log('cannot play the sound', e);
    }
  };

  return (
    <PageHeader title="Dictionary" variant="PRIMARY">
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScreenWrapper>
        <ScrollView>
          <View style={styles.searchContainer}>
            <SearchBarComponent
              onChange={setInputQuery}
              value={inputQuery}
              placeholder="Search your word..."
              onPress={getData}
            />
            {isLoading && (
              <View>
                <AwesomeLoading
                  indicatorId={8}
                  size={50}
                  isActive={true}
                  text="loading"
                />
              </View>
            )}
            {wordData.length === 0 || (inputQuery === '' && !isLoading) ? (
              <Image
                source={require('../../assets/images/preview.jpg')}
                alt="preview"
                style={styles.image}
              />
            ) : wordData.length === 0 ? (
              <>
                <LottieView
                  source={require('../../assets/lotties/loading.json')}
                  autoPlay
                  loop
                />
              </>
            ) : (
              <>
                <View>
                  {wordData.map((data, index) => {
                    return (
                      <View key={index}>
                        <View style={styles.dataContainer}>
                          <Text style={styles.phonetic}>{data.phonetic}</Text>
                          <TouchableOpacity onPress={handlePlay}>
                            <Icon
                              name="volume-up"
                              size={FONTSIZES.xl}
                              color={COLORS.action.tertiary}
                            />
                          </TouchableOpacity>
                          {data?.meanings.map((meaning, index) => {
                            return (
                              <View key={index}>
                                <Spacer space={18} />
                                <Text
                                  style={
                                    styles.partOfSpeech
                                  }>{`Parts of speech: ${meaning.partOfSpeech}`}</Text>
                                <Spacer space={12} />
                                {meaning.definitions.map(
                                  (definition, index) => {
                                    return (
                                      <View
                                        style={styles.definitionContainer}
                                        key={index}>
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
                                  },
                                )}
                                {meaning.synonyms.length !== 0 && (
                                  <Text
                                    style={[
                                      styles.definition,
                                      styles.synonym,
                                    ]}>{`Synonyms: ${meaning.synonyms}`}</Text>
                                )}
                                <Spacer space={30} />
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
