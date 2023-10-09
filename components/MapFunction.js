import { View, Text, StyleSheet, ScrollView } from "react-native";
import List from "./List";

const MapFunction = () => {
  const users = [
    {
      id: 1,
      name: "abc",
    },
    {
      id: 3,
      name: "qer",
    },
    {
      id: 9,
      name: "gfn",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 3,
      name: "qer",
    },
    {
      id: 9,
      name: "gfn",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 3,
      name: "qer",
    },
    {
      id: 9,
      name: "gfn",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 3,
      name: "qer",
    },
    {
      id: 9,
      name: "gfn",
    },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        {"\n"}List with map function (custom) {"\n"}
      </Text>
      <ScrollView>
        {users.map((item) => (
          <Text style={styles.design}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  design: {
    fontSize: 20,
    color: "green",
    padding: 10,
    borderWidth: 2,
    borderColor: "red",
    marginBottom: 10,
  },
});

export default MapFunction;
