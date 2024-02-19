import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CourseInput from "./components/courseInput";

export default function App() {
  const [modalVisible, setmodalVisible] = useState(false);

  const startModal = () => {
    setmodalVisible(true);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add Course" color="red" onPress={startModal} />
        <CourseInput visible={modalVisible} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
