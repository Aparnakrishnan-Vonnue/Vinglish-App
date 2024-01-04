import { StyleSheet, View } from "react-native";
import AddData from "./src/addData";
import FetchData from "./src/fetchData";

export default function App() {
  return (
    <View style={styles.container}>
      <AddData />
      {/* <FetchData /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
