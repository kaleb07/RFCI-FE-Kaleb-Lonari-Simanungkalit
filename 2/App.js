import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [rev, setReverse] = useState("");
  const [list, setList] = useState([]);
  const [past, setPast] = useState([]);

  const userInput = (enterText) => {
    setValue(enterText);
    setPresent(enterText);
  };

  const undo = () => {
    setPast([...past], list);
    console.log("ini isi past", n);
    let n = "";
    if (past.length > 0) {
      n = past[past.length - 1];
    }
    setValue(n);
  };

  const reverse = () => {
    var currString = value;
    setList([...list, value]);
    var revResult = "";
    for (let i = value.length - 1; i >= 0; i--) {
      revResult = revResult + currString[i];
    }
    setReverse(revResult);
    console.log("isi list", list);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          color='black'
          onChangeText={userInput}
          value={value}
          placeholder='input something'
        />
      </View>
      <View>
        <Text style={styles.text}>Output : {rev} </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button color='black' title='Reverse' onPress={reverse} />
        <Button title='Undo/Redo' color='black' onPress={undo} />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(40,44,52)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "rgb(20, 245, 237)",
    height: 25,
    paddingLeft: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
    color: "white",
  },
  text1: {
    color: "black",
  },
});
