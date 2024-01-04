import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {db} from '../../config';
import {ref, onValue} from 'firebase/database';

const FetchData = () => {
  const [wordData, setWordData] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, 'posts/');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key],
      }));
      // console.log(newPosts);
      setWordData(newPosts);
    });
  }, []);

  console.log(wordData);

  return (
    <View>
      <Text>FetchData</Text>
    </View>
  );
};

export default FetchData;
