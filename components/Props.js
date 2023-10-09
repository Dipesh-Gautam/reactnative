import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Props = () => {
  let [address,setAddress] = useState("Boston");
  const name = "John"
  return (
    <View>
      <Text>Props in React-Native</Text>
      <User add={address} name={name} />
      <Button title="Update" onPress={()=>setAddress("Lowell")}/>
    </View>
  );
};

export const User = (props) => {
  return (
    <View>
      <Text>
        {props.add},{props.name}
      </Text>
    </View>
  );
};

export default Props;
