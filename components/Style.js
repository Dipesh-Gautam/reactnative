import React from "react";
import { View, Text, StyleSheet } from "react-native";
import externalStyle from "./ExternalStyles";

const Style = () => {
  return (
    <View>
      <Text>
        {"\n"}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 30 }}>Styles in React Native</Text>
      <Text>{"\n"}</Text>
      <Text style={{ fontSize: 25, color: "green", backgroundColor: "maroon" }}>
        Inline style
      </Text>
      {/* inline style */}
      <Text>{"\n"}</Text>
      <Text style={internalStyle.textBox}>Internal style</Text>
      <Text style={internalStyle.textBox}>Internal style</Text>
      <Text style={internalStyle.textBox}>Internal style</Text>
      <Text>{"\n"}</Text>
      <Text style={externalStyle.toolbox}>External style</Text>
      <Text style={externalStyle.toolbox}>External style</Text>
      <Text style={externalStyle.toolbox}>External style</Text>
      <Text>{"\n"}</Text>
      <Text
        style={[internalStyle.textBox, externalStyle.toolbox, { fontSize: 30 }]}
      >
        All styles in a place.
      </Text>
      {/* All styles i.e. internal,external & inline in a place. */}
    </View>
  );
};

const internalStyle = StyleSheet.create({
  textBox: {
    color: "blue",
    fontSize: 25,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
    margin: 10,
    textAlign: "center",
    borderColor: "red",
    borderWidth: 2,
  },
});
export default Style;
