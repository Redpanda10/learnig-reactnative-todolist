import React from 'react'
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import AddTaskScreen from './screens/AddTaskScreen'


const Stack = createAppContainer()
function App() {
  return (
    <NavigationContainer initialState={Home}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddTask" component={AddTaskScreen} />
    </NavigationContainer>
  )
}

export default App