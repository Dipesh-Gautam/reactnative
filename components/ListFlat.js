import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListFlat = () => {
  const users = [
    {
      id: 5,
      name: "ABC",
    },
    {
      id: 9,
      name: "XYZ",
    },
    {
      id: 13,
      name: "QWE",
    },
    {
      id: 56,
      name: "MBD",
    },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        {"\n"}List with Flat List component{"\n"}
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.design}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  design: {
    fontSize: 24,
    padding: 10,
    color: "green",
    backgroundColor: "violet",
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 50,
    margin: 10,
  },
});

export default ListFlat;
