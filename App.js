import { Text, View, Button, ScrollView } from "react-native";
import CompanyData from "./components/CompanyData";
import { UserData } from "./components/UserData";
import Event from "./components/Event";
import State from "./components/State";
import Props from "./components/Props";
import { User } from "./components/Props";
import Prac from "./components/Prac";
import Style from "./components/Style";
import Get from "./components/InputText";
import InputText from "./components/InputText";
import InputPractice from "./components/InputPractice";
import Form from "./components/Form";
import ListFlat from "./components/ListFlat";
import List from "./components/List";
import MapFunction from "./components/MapFunction";
import StaticGrid from "./components/StaticGrid";
import DynamicGrid from "./components/DynamicGrid";
import LoopFlatlist from "./components/LoopFlatlist";

const fun = () => {
  return "App";
};

let x = 50;
var y = " Banana";
const App = () => {
  return (
    <View style={{ alignItems: "center" }}>
      {/* <Text style={{ fontSize: 30 }}>
        {"\n"}
        {fun()}
      </Text>
      <Button title="Button"></Button>
      <Text>{"\n"}</Text>
      <Text style={{ fontSize: 30 }}>Tap on button below</Text>
      <Button title="tap here" color={"green"}></Button>
      <Text>{"\n"}</Text>
      <Text>If x = {x}</Text>
      <Text>& y = {y}</Text>
      <Text>Then x+y = {x + y}</Text>
      <Text>If x is less than 30 print less than 30 else greater than 30.</Text>
      <Text>
        Ans = {x < 30 ? "less than 30" : "greater than 30"} {"\n"}
      </Text>
      <UserData />
      <CompanyData />
      <UserData />
      <Event />
      <State/>
      <Props/>
      <Prac/>
      <Style/>
      <InputText/>
      <InputPractice/>
      <Form/>
      <ListFlat/>
      <List/>
      <MapFunction/> */}
      {/* <StaticGrid/> */}
      {/* <DynamicGrid/> */}
      <LoopFlatlist />
    </View>
  );
};

export default App;
