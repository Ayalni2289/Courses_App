import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CourseInput from "./components/courseInput";

export default function App() {
  const [modalVisible, setmodalVisible] = useState(false);
  const [course, setcourse] = useState([]);

  const startModal = () => {
    setmodalVisible(true);
  };
  const endModal = () => {
    setmodalVisible(false);
  };

  const AddCourse = (courseTitle) => {
  // console.log(courseTitle);
  setcourse((course) => [
    ...course,
    { key: Math.random().toString(), text: courseTitle},
  ]);
  };


  const deleteCourse = (courseTitle) => {
  // console.log(courseTitle+" deleted");
  setcourse((course) => {
    return course.filter((course) => course.text !== courseTitle);
  });
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
        <View>
          <FlatList
            data={course}
            renderItem={({item}) => (
              <View>
                <Text>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
});
