import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CourseInput from "./components/courseInput";

export default function App() {
  const [modalVisible, setmodalVisible] = useState(false);

  const startModal = () => {
    setmodalVisible(true);
  };
  const endModal = () => {
    setmodalVisible(false);
  };

  const AddCourse = (courseTitle) => {
    console.log(courseTitle);
  };
  const deleteCourse = (courseTitle) => {
    console.log(courseTitle+" deleted");
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add Course" color="red" onPress={startModal} />
        <CourseInput
          visible={modalVisible}
          onAddButton={AddCourse}
          onCancelButton={endModal}
          onDeleteButton={deleteCourse}
        />
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
