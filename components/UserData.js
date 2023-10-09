import { Text, View } from "react-native";

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>UserData</Text>
      <Text>Name:Falano</Text>
      <Text>Age:24</Text>
      <Text>Email:falano@test.com {"\n"}</Text>
    </View>
  );
};

export { UserData };
