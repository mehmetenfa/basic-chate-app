import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'


const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hi Home Screen</Text>
    </SafeAreaView>
  )
}

const Settings = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hi Settings Screen</Text>
    </SafeAreaView>
  )
}

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'chatbubbles'
              : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Tabs.Screen name='Home' component={Home} />
        <Tabs.Screen name='Settings' component={Settings} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App;