import React from "react";
import { SafeAreaView, TouchableHighlight, View } from "react-native";
import Tailwind from "../libs/tailwind/Tailwind.lib"
import ButtonPrimary from "../components/molecules/ButtonPrimary.molecule"

const Home = ({ navigation }) => {
    return (
        <View style={ Tailwind.style(`min-h-full w-full bg-white flex flex-col items-center justify-center`) } >
            <SafeAreaView style={ Tailwind.style(`flex flex-col items-center w-full`) } >
                <TouchableHighlight underlayColor={ "#10101010" } style={ Tailwind.style(`rounded-md w-full w-1/3`) } onPress={ () => navigation.navigate("InputTask") } >
                    <ButtonPrimary title={ "Jumlah Bilangan" } />
                </TouchableHighlight>
                <TouchableHighlight underlayColor={ "#10101010" } style={ Tailwind.style(`rounded-md w-1/3 mt-3`) } onPress={ () => navigation.navigate("ListTask") } >
                    <ButtonPrimary title={ "List View" } />
                </TouchableHighlight>
            </SafeAreaView>
        </View>
    )
}

export default Home