import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const State = () => {
  const [name, setName] = useState("Qwerty");
  let data = "Ram";

  const Update = () => {
    setName("Abcde");
    data = "Hari";
  };


  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        {"\n"}State in React-Native{"\n"}
      </Text>
      <Text>
        {name}
        {"\n"}
        {data}
      </Text>
      {/*name gets changed because of using State but data doesn't gets changed as it is variable
       and component doesn't rerenders. */}
      <Button title="Update" onPress={Update}></Button>
      <Text>{"\n"}</Text>
    </View>
  );
};

export default State;
