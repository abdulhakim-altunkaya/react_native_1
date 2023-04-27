import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
function TodoItem({item, deleteTask}) {

  return (
    <TouchableOpacity >
        <View style={styles.listItem}>
          
          <Text> {item.task} </Text>
          <MaterialIcons name="highlight-remove" size={22} color="#333" onPress={() => deleteTask(item.key)}/>
        </View>
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
      flexDirection: "row",
      justifyContent: "space-between",
    },
});

export default TodoItem