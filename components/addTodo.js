import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default AddTodo = ({ addHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="new todo..."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button title="add todo" onPress={() => addHandler(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
