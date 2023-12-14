import React, {useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import axios from 'axios';
import ScreenWrapper from '../../components/ScreenWrapper';
import SearchBarComponent from '../../components/SearchBar';
import {styles} from './style';
import {PageHeader} from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import {DictionaryData} from '../../types/dictionary';

const Dictionary = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [wordData, setWordData] = useState<DictionaryData>([]);

  const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

  function getData() {
    inputQuery &&
      axios
        .get(dictionaryApiUrl)
        .then(response => {
          setWordData(response.data);
        })
        .catch(error => {
          console.error('Dictionary API Error:', error);
        });
  }

  console.log(wordData);

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
            {wordData.length === 0 ? (
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
                      <>
                        <View>
                          <Text>{inputQuery}</Text>
                          <Text>{data.phonetic}</Text>
                          {data?.meanings.map(meaning => {
                            return (
                              <>
                                <Spacer space={18} />
                                <Text>{`Parts of speech: ${meaning.partOfSpeech}`}</Text>
                                <Spacer space={12} />
                                {meaning.definitions.map(definition => {
                                  return (
                                    <>
                                      <Text>{`Definition: ${definition.definition}`}</Text>
                                      <Spacer />
                                      {definition.example && (
                                        <Text>{`Example: ${definition.example}`}</Text>
                                      )}
                                    </>
                                  );
                                })}
                                {meaning.synonyms.length !== 0 && (
                                  <Text>{`Synonyms: ${meaning.synonyms}`}</Text>
                                )}
                              </>
                            );
                          })}
                        </View>
                      </>
                    );
                  })}
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </ScreenWrapper>
    </PageHeader>
  );
};

export default Dictionary;
