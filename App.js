import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from "react";
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const[todos, setTodos] = useState([
    {task: "have a coffee in cafe", key: "1"},
    {task: "follow two videos of net ninja", key: "2"},
    {task: "create a solidity contract", key: "3"},
    {task: "start bnb hackaton", key: "4"},
    {task: "make one video", key: "5"},
    {task: "study german", key: "6"},
  ])

  const deleteTask = (key) => {
    setTodos(todos.filter( task => task.key != key ))
  }

  const addTask = (task) => {
    let newTask = {task: task, key: Math.random().toString()};
    setTodos((prevState) => {
      const newState = [...prevState]
       newState.push(newTask);
       return newState;
    });
    console.log(todos);
  }

  

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content} >
        <AddTodo addTask={addTask} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} deleteTask={deleteTask} />
            )}
          />
        </View>
      
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});