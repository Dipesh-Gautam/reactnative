import { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

const InputPractice = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 20 }}>{"\n"}Input Text</Text>
      <TextInput
        placeholder="Enter Text"
        style={design.toolbox}
        onChangeText={(any) => setText(any)}
        value={text}
      />
      <Text>Enter text = {text}</Text>
      <Button title="Clear" onPress={() => setText("")} />
    </View>
  );
};

const design = StyleSheet.create({
  toolbox: {
    fontSize: 20,
    margin: 10,
    borderColor: "green",
    borderWidth: 1,
  },
});

export default InputPractice;
