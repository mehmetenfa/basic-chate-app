import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hi Home Screen</Text>
    </SafeAreaView>
  )
}

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>Hi Settings Screen</Text>
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