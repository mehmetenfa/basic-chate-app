import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hi Home Screen</Text>
      <Button title='Go to Settings Screen'
      onPress={() => {
        navigation.push("Settings")
      }}
      />
    </SafeAreaView>
  )
}

const Settings = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hi Settings Screen</Text>
      <Button title='Go to Home Screen'
      onPress={() => {
        navigation.push("Home")
      }}
      />
    </SafeAreaView>
  )
}

const MainStack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name='Home' component={Home} />
        <MainStack.Screen name='Settings' component={Settings} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App