import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState } from "react";

export default function App() {

  let [content, setContent] = useState(null);
  const[people, setPeople] = useState([
    {name: "shaun", key: "1"},
    {name: "bedo", key: "2"},
    {name: "maho", key: "3"},
    {name: "sülo", key: "4"},
    {name: "ibo", key: "5"},
    {name: "cemo", key: "6"},
    {name: "hamo", key: "7"},
    {name: "sumbulo", key: "8"},
    {name: "sukri", key: "9"},
    {name: "kasimo", key: "10"},
  ])

  let [displayStatus, setDisplayStatus] = useState(false);
  const displayNames = () => {
    setDisplayStatus(!displayStatus);
    if(displayStatus === true) {
      setContent(
        people.map( (person) => (
          <Text style={styles.item} key={person.key}>{person.name}</Text>
        ))
      )
    } else {
      setContent(null);
    }

  }

  return (
    <View style={styles.container}>
      <Button title='display members' onPress={displayNames}/>
      <ScrollView>
        {content}
      </ScrollView>


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
  }
});