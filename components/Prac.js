import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Prac = () => {
  const [name, setName] = useState("ABC");
  const address = "USA";
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        {"\n"}State and Props{"\n"}
      </Text>
      <Text>{name}</Text>
      <Button title="Update" onPress={() => setName("XYZ")} />
      {/* state use */}
      <User address={address} />
      {/* props use */}
    </View>
  );
};

const User = (props) => {
  return (
    <View>
      <Text>{props.address}</Text>
      {/* props use */}
    </View>
  );
};

export default Prac;
