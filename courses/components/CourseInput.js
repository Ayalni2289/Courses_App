import {
  StyleSheet,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function courseInput({ visible, onAddButton, onCancelButton, onDeleteButton}) {
  const [EnteredText, setEnteredText] = useState("");

  const addCourseHandler = () => {
    onAddButton(EnteredText);
    setEnteredText("");
  };

  const deleteCourseHandler = () => {
    onDeleteButton(EnteredText);
    setEnteredText("");
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.centeredView}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.Image}
        />
        <TextInput
          style={styles.logo}
          placeholder="Enter Your ID"
          value={EnteredText}
          onChangeText={(text) => setEnteredText(text)}
        />
        <View style={styles.modalView}>
          <Button
            title="Add"
            color="green"
            style={styles.button}
            onPress={addCourseHandler}
          />
          <Button
            title="Delete"
            color="red"
            style={styles.button}
            onPress={deleteCourseHandler}
          />
          <Button
            title="Cancel"
            color="black"
            style={styles.button}
            onPress={onCancelButton}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  logo: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: "40%",
  },
  Image: {
    width: 150,
    height: 150,
    borderRadius: 40,
    marginBottom: 10,
  },
});
