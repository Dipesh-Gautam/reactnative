import { Text, View, StyleSheet, ScrollView } from "react-native";

const DynamicGrid = () => {
  const users = [
    {
      name: "Peter",
      id: 1,
    },
    {
      name: "Shark",
      id: 5,
    },
    {
      name: "Tony",
      id: 2,
    },
    {
      name: "John",
      id: 3,
    },
    {
      name: "Mane",
      id: 21,
    },
    {
      name: "Choophan",
      id: 47,
    },
    {
      name: "Hadi",
      id: 44,
    },
    {
      name: "Roonie",
      id: 38,
    },
    {
      name: "William",
      id: 59,
    },
    {
      name: "Jane",
      id: 93,
    },
    {
      name: "Randy",
      id: 51,
    },
    {
      name: "Kane",
      id: 30,
    },
    {
      name: "Gayle",
      id: 33,
    },
    {
      name: "Mark",
      id: 15,
    },
    {
      name: "Rambo",
      id: 13,
    },
    {
      name: "Stark",
      id: 19,
    },
    {
      name: "Mamboo",
      id: 6,
    },
    {
      name: "Alexa",
      id: 11,
    },
    {
      name: "Julie",
      id: 111,
    },
    {
      name: "Jiss",
      id: 121,
    },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        {"\n"}Dynamic Grid{"\n"}
      </Text>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          {users.map((item) => (
            <Text style={styles.design}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  design: {
    fontSize: 24,
    backgroundColor: "blue",
    margin: 10,
    padding: 10,
    borderColor: "red",
    borderWidth: 1,
    width: 100,
    height: 100,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default DynamicGrid;
