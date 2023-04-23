import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from "react";

export default function App() {


  const[people, setPeople] = useState([
    {name: "shaun", id: "1"},
    {name: "bedo", id: "2"},
    {name: "maho", id: "3"},
    {name: "sülo", id: "4"},
    {name: "ibo", id: "5"},
    {name: "cemo", id: "6"},
    {name: "hamo", id: "7"},
    {name: "sumbulo", id: "8"},
    {name: "sukri", id: "9"},
    {name: "kasimo", id: "10"},
  ])

  const pressHandler = (id) => {
    console.log(id);
    setPeople(people.filter( person => person.id != id));
    console.log(people);
  }

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,

  },
  buttonContainer: {
    fontFamily: "Trebuchet MS",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
  }
});