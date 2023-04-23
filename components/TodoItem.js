import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function TodoItem({item, deleteTask}) {

  return (
    <TouchableOpacity onPress={() => deleteTask(item.key)}>
        <Text style={styles.listItem} > &#10148; {item.task} </Text>
    </TouchableOpacity>  
  )

}

const styles = StyleSheet.create({
    listItem: {
      fontSize: 18,
      padding: 16,
      marginTop: 16,
      borderColor: "#bbb",
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 10,
    },
});

export default TodoItem