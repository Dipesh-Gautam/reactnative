import { View, Text, StyleSheet } from "react-native";

const StaticGrid = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        {"\n"}Static Grid{"\n"}
      </Text>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={styles.design}>1</Text>
        <Text style={styles.design}>2</Text>
        <Text style={styles.design}>3</Text>
        <Text style={styles.design}>4</Text>
        <Text style={styles.design}>5</Text>
        <Text style={styles.design}>6</Text>
        <Text style={styles.design}>7</Text>
        <Text style={styles.design}>8</Text>
        <Text style={styles.design}>9</Text>
        <Text style={styles.design}>10</Text>
        <Text style={styles.design}>11</Text>
        <Text style={styles.design}>12</Text>
        <Text style={styles.design}>13</Text>
        <Text style={styles.design}>14</Text>
        <Text style={styles.design}>15</Text>
        <Text style={styles.design}>16</Text>
        <Text style={styles.design}>17</Text>
        <Text style={styles.design}>18</Text>
      </View>
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
export default StaticGrid;
