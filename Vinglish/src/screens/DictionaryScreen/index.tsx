import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import axios from 'axios';
import ScreenWrapper from '../../components/ScreenWrapper';
import SearchBarComponent from '../../components/SearchBar';
import {ListItem} from 'react-native-elements';
import {COLORS} from '../../themes/colors';
import {styles} from './style';

const Dictionary = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Define your API endpoints
    const datamuseApiUrl = `https://api.datamuse.com/words?sp=${inputQuery}&max=5`;
    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputQuery}`;

    // Fetch data from Datamuse API
    axios
      .get(datamuseApiUrl)
      .then(response => {
        setSuggestions(response.data);
      })
      .catch(error => {
        console.error('Datamuse API Error:', error);
      });

    // Fetch data from Dictionary API
    axios
      .get(dictionaryApiUrl)
      .then(response => {
        console.log('Dictionary API Response:', response.data);
      })
      .catch(error => {
        console.error('Dictionary API Error:', error);
      });
  }, [inputQuery]);

  const renderSuggestionItem = ({item}) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{color: COLORS.primary}}>
          {item.word}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <ScreenWrapper>
      <View>
        <Text>Dictionary</Text>
        <View>
          <SearchBarComponent
            onChange={value => setInputQuery(value)}
            value={inputQuery}
            placeholder="Search your word..."
          />
          <Image
            source={require('../../assets/images/preview.jpg')}
            alt="preview"
            style={styles.image}
          />
          <FlatList
            data={suggestions}
            keyExtractor={item => item.word}
            renderItem={renderSuggestionItem}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Dictionary;
