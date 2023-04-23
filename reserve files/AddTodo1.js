import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';


function AddTodo({addTask}) {

    let[task, setTask] = useState("");
    let[taskKey, setTaskKey] = useState("");

    const changeHandler1 = (val) => {
      setTask(val)
    }
    const changeHandler2 = (val) => {
      setTaskKey(val)
    }
    
  return (
    <View>
        <TouchableOpacity onPress={()=> addTask(task, taskKey)}>
            <Text style={styles.button}> ADD TASK </Text>
        </TouchableOpacity>

        <TextInput 
          maxLength={40} 
          style={styles.inputField} 
          onChangeText={ changeHandler1 }
          placeholder='task....'
          value={task}
         />
        <TextInput 
          maxLength={10}
          keyboardType='numeric' 
          style={styles.inputField} 
          onChangeText={ changeHandler2 }
          placeholder='task number....'
          value={taskKey}
         />
    </View>
  )
}

const styles = StyleSheet.create({
    inputField: {
      backgroundColor: "#ededed",
      fontSize: 20,
      borderRadius: 7,
      padding:9,
      marginBottom: 15,
    },
    button: {
        backgroundColor: "green",
        color: "white",
        fontSize: 35,
        marginBottom: 15,
    },
  });

export default AddTodo