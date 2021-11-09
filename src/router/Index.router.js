import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { StatusBar } from "react-native"
import Home from "../screens/Home.screen"
import InputTask from "../screens/InputTask.screen"
import ListTask from "../screens/ListTask.screen"

const Stack = createNativeStackNavigator()

const Index = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={ "#17D7A0" } />
            <Stack.Navigator initialRouteName="Home" screenOptions={ { headerShown: false } } >
                <Stack.Screen name="Home" component={ Home } />
                <Stack.Screen name="InputTask" component={ InputTask } />
                <Stack.Screen name="ListTask" component={ ListTask } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index