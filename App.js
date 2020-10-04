import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/Header";
import TodoItems from "./components/TodoItems";
import AddTodos from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  // remove Item handler
  const pressHandler = (passkey) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != passkey);
    });
  };

  // adding Item handler
  const addHandler = (passText) => {
    if (passText.length > 3) {
      setTodos((prevtodos) => [
        { text: passText, key: Math.random().toString() },
        ...prevtodos,
      ]);
    } else {
      Alert.alert("oops!", "todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      //this method is used on all the items to dismiss the keyboard
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to-do form */}
          <AddTodos addHandler={addHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

        {/*  */}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
