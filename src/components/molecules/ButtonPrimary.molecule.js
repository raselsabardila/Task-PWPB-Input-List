import React from "react";
import { Text, View } from "react-native";
import Tailwind from "../../libs/tailwind/Tailwind.lib";

const ButtonPrimary = ({ title }) => {
    return (
        <View style={ Tailwind.style(`bg-green-400 rounded-md w-full py-4 flex flex-row justify-center`) } >
            <Text style={ Tailwind.style(`text-sm text-white font-bold`) } >
                { title }
            </Text>
        </View>
    )
}

export default ButtonPrimary