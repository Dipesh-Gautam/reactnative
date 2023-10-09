import { Text, View, FlatList, StyleSheet } from "react-native";

const LoopFlatlist = () => {
  const users = [
    {
      id: 1,
      name: "John",
      email: "abc@test.com",
    },
    {
      name: "Stark",
      id: 19,
      email: "qwe@test.com",
    },
    {
      name: "Mamboo",
      id: 6,
      email: "bit@test.com",
    },
    {
      name: "Alexa",
      id: 11,
      email: "era@test.com",
    },
    {
      name: "Julie",
      id: 111,
      email: "kar@test.com",
    },
    {
      name: "Jiss",
      id: 121,
      email: "xyz@test.com",
    },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        {"\n"}
        Component in Loop with Flatlist
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserData item={item}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  designView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "blue",
  },

  designText: {
    fontSize: 24,
    backgroundColor: "yellow",
    color: "orange",
    flex: 1,
    marginBottom: 10,
    padding: 1,
    textAlign: "center",
  },
});

const UserData = (props) => {
    return (
        <View style={styles.designView}>
            <Text style={styles.designText}>{props.item.name}</Text>
            <Text style={styles.designText}>{props.item.email}</Text>
          </View>
    )
};

export default LoopFlatlist;
