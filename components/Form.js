import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);

  const Clear = () => {
    setName("")
    setPassword("") 
    setEmail("")
    setDisplay(false)
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{"\n"} Simple Form in React Native</Text>
      <TextInput
        placeholder="Enter User Name"
        style={styles.design}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Enter User Password"
        style={styles.design}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Enter User Email"
        style={styles.design}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <View style={{ margin: 10 }}>
        <Button
          title="print details"
          color={"green"}
          onPress={() => setDisplay(true)}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button title="clear details" onPress={Clear}/>
      </View>
      <View>
        {display ? (
          <View>
            <Text>User Name : {name}</Text>
            <Text>Password : {password}</Text>
            <Text>Email : {email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  design: {
    fontSize: 20,
    color: "pink",
    borderWidth: 2,
    borderColor: "green",
    margin: 10,
    padding: 5,
  },
});

export default Form;
