import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from "react";

export default function App() {

  const[name, setName] = useState("elefantenberg");
  const[client, setClient] = useState({
    city: "diyarbakir", 
    age: 40,
  })

  const changeName = () => {
    if(name === "abdulhakim") {
      setName("elefantenberg");
    } else {
      setName("abdulhakim");  
    }

  }

  return (
    <View style={styles.container}>
      <Text>My Name is: {name} </Text>
      <Text>You are from: {client.city} and your age is: {client.age} </Text>
      <Text style={styles.setFontSizeFour}>Hello this is hello world really</Text>
      <View style={styles.buttonContainer}>
        <Button title='update name' onPress={changeName} />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setFontSizeFour: {
    fontSize: 30,
    backgroundColor: 'pink',
  },
  buttonContainer: {
    marginTop: 50,
  }
});
