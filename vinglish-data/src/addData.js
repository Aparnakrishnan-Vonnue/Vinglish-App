import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { db } from "../config";
import { ref, set } from "firebase/database";

const AddData = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [synonyms, setSynonyms] = useState("");
  const [usage, setUsage] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");

  //function to add data to firebase realtime db
  const dataAddOn = () => {
    set(ref(db, "word/" + word), {
      word: word,
      meaning: meaning,
      synonyms: synonyms,
      usage: usage,
      partOfSpeech: partOfSpeech,
    });
    setWord("");
    setMeaning("");
    setSynonyms("");
    setUsage("");
    setPartOfSpeech("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Realtime Db & Expo</Text>
      <TextInput
        placeholder="Word"
        value={word}
        onChangeText={(text) => setWord(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Meaning"
        value={meaning}
        onChangeText={(text) => setMeaning(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Synonyms"
        value={synonyms}
        onChangeText={(text) => setSynonyms(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Usage"
        value={usage}
        onChangeText={(text) => setUsage(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Part of speech"
        value={partOfSpeech}
        onChangeText={(text) => setPartOfSpeech(text)}
        style={styles.input}
      />
      <Button title="Add Data" onPress={dataAddOn} />
    </View>
  );
};

export default AddData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 100,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
