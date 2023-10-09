import { Button, Text, View } from "react-native";

const Event = () => {
  const Apple = () => {
    console.warn("Apple");
  };
  const Banana = () => {
    console.warn("Banana");
  };
  const Cat = (value) => {
    console.warn(value);
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Button & onPress Event{"\n"}</Text>
      <Button title="on press 1" color={"red"} onPress={Apple} />
      {/* When no need to pass parameter */}
      <Text>{"\n"}</Text>
      <Button title="on press 2" onPress={() => Banana()} />
      {/* When it is needed to pass parameter */}
      <Text>{"\n"}</Text>
      <Button title="on press 3" onPress={() => Cat(40)} color={"violet"} />
    </View>
  );
};

export default Event;
