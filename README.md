# reactnative

## Components

- components are the independent and reusable code like functions.
- functions can't return html tags while components can.
- should make new file for every new components.
- components name starts with capital letters.

## Export default vs Export

- export default exports single value as the default value.
  Example :
  export default App;

- export with name will export multiple values as named exports.
  Example :
  export {App};

## Import

- to import components with export default it isn't required to use {}.
  Example :
  import User from "./components/User";
- Also, to import components with export default Name doesn't have to be exactly same.
  Example :
  import U from "./components/User";

- to import components with export it is required to use {}.
  Example :
  import {User} from "./components/User";

## onPress Event

- When there is no need to pass parameter.
  Example :
  <Button title="on press 1" color={"red"} onPress={Apple} />

- When it is needed to pass parameter.
  Example :
  1. <Button title="on press 2" onPress={() => Banana()} />
  2. <Button title="on press 3" onPress={() => Cat(40)} color={"violet"}/>

## State

- state are like variables.
- state is used to update the values or datas.
- while updating variable, components doesn't rerender but while updating state components rerenders.
- state can't be used outside components.
  i.e. Data of state can't be shared.

## Props

- props are the arguments or parameters of components.
- it is used to send data from one components to another components.
  i.e. it can be used outside components.

## Style

- Inline Style :

  - style written inside components.
  - suitable for each components with different styles.

- Internal Style :

  - style written in same file.
  - suitable for many components having similar styles.

- External Style :

  - style written in different file.
  - need to import this and use in a components.

- All inline, internal, & external styles can be used at a time also.
  Example :
  style={[internalStyle.design,externalStyle.decoration,{fontSize:20}]}

## Get Text Input Value

- <TextInput/> component is used for creating text input.
- onChangeText event is applied on <TextInput/> component but doesn't works on <Button/>.
  Example :
  <TextInput onChangeText={(text)=>setName(text)} />

## List in React Native

- 1.  FlatList

      - used to make list.
      - makes top to bottom list.
        i.e. vertical list
      - suitable for many elements.Let's say 4000,5000 elements.
      - removes upper and lower elements from UI so that the scroll will be smooth.
      - performs better.
      - Lazy loading can be applied.
      - data used in FlatList can be normal array as well as array of object.
        i.e. const abc = ["eer","vjs"] // normal array

              cont xyz = [
                  {
                      name: "hgh",
                      id: 5
                  },
                  {
                      name: "efh",
                      id: 6
                  }
              ]

        Example :
        <FlatList
        data={xyz}
        renderItem={({item})=><Text>{item.name}</Text>}/>

  2.  Map Function
      - custom function to make list.
      - suitable for less elements like 50, 60.
        Example :
        const
        <ScrollView>
        {
        users.map((item) => <Text>{item.name}</Text>
        )}
        </ScrollView>

## ScrollView

    -component used to scroll.

## Grid

- used to make horizontal list.

  1.  Static Grid :
      Example :

            <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
            <Text>abc</Text>
            <Text>xyz</Text>
            </View>

  2.  Dynamic Grid :
      Example :

            const users = [
            {
            name:"abc"
            },
            {
            name:"xyz"
            }
            ]

            return (
            <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
            {
            users.map((item)=><Text>{item.name}</Text>)
            }
            </View>
            )

## Flex

- style flex:1 makes flexible.
- occupies every space available.

## Flex Direction

- style flexDirection gives direction to the list.

## Flex Wrap

- wraps the flex.
- when the screen is occupied, it sends element to the second line.
