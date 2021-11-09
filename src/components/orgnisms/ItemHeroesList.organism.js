import React from "react";
import { Alert, Image, Text, TouchableHighlight, View } from "react-native";
import Tailwind from "../../libs/tailwind/Tailwind.lib";
import ButtonPrimary from "../molecules/ButtonPrimary.molecule"

const ItemHeroesList = ({ item }) => {
    const showAlert = () => {
        Alert.alert(
            "System say",
            "Are you sure want delete this?",
            [
                {
                    text: "No",
                },
                {
                    text: "Delete",
                },
            ],
        )
    }

    return (
        <View style={ Tailwind.style(`w-full flex flex-row items-center p-3 bg-gray-100 rounded-lg`) } >
            <Image
                source={ { uri: item.image } }
                style={ Tailwind.style(`w-36 h-36 rounded-md`) }
            />
            <View style={ Tailwind.style(`flex flex-col p-3 h-36 justify-between flex-grow`) } >
                <View style={ Tailwind.style(`flex flex-col`) } >
                    <Text style={ Tailwind.style(`text-2xl font-bold text-gray-900`) } >
                        { item.name }
                    </Text>
                    <Text style={ Tailwind.style(`text-sm text-gray-400 mt-1`) } >
                        { item.team }
                    </Text>
                </View>
                <TouchableHighlight underlayColor={ "#10101010" } style={ Tailwind.style(`rounded-sm w-36`) } onPress={ () => showAlert() } >
                    <ButtonPrimary title={ "DELETE" } />
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default ItemHeroesList