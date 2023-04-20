import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from "react";

export default function App() {

  const[name, setName] = useState("elefantenberg");
  let[yourName, setYourName] = useState("");
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
      <Text>Your Name is: {yourName}</Text>
      <Text>You are from: {client.city} and your age is: {client.age} </Text>
      <Text style={styles.setFontSizeFour}>Hello this is hello world really</Text>
      <View style={styles.buttonContainer}>
        <Button title='update name' onPress={changeName} />
      </View>
      <View>
        <Text>Enter Name: </Text> 
        <TextInput 
          multiline //when you press enter it will go one line down
          numberOfLines={3}
          maxLength={40} 
          keyboardType='numeric' //the keyboard that will pop up will be numeric
          style={styles.inputField} 
          onChangeText={(val)=> setYourName(val)}
          placeholder='your name....'
         />
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
  },
  inputField: {
    backgroundColor: "gray",
    fontSize: 25,
    borderRadius: 7,
    fontFamily: "Verdana",
    padding:9,
  },
});
