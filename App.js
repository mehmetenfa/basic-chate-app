import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from './screens/Chats'

const ChatsStack = createStackNavigator()

const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={Chats} />
    </ChatsStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator()

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name='Chats' component={ChatsScreen} />
  </Tabs.Navigator>
)

const MainStack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode='none'>
        <MainStack.Screen name='Tabs' component={TabsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App