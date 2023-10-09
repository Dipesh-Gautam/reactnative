import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
const InputText = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        {"\n"}
        {"\n"}
        Handle Text Input
      </Text>
      <Text>{"\n"}</Text>
      <Text>Your name is : {name}</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.textInput}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Button title="clear" onPress={() => setName("")} />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: "pink",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    margin: 10,
  },
});
export default InputText;
