import { View, Text, FlatList } from "react-native";

const List = () => {
  const users = [
    {
      id: 5,
      name: "abc",
    },
    {
      id: 7,
      name: "qwe",
    },
    {
      id: 4,
      name: "qgb",
    },
  ];


return (
    <View>
        <Text style={{fontSize:30}}>{"\n"}List Using FlatList</Text>
        <FlatList 
        data={users}
        renderItem={({item})=><Text style={{fontSize:24}}>{item.name}</Text>}
        keyExtractor={item=>item.id}/>
    </View>
)
};

export default List;
