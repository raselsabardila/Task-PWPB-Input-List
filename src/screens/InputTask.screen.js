import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View, ActivityIndicator } from "react-native";
import Tailwind from "../libs/tailwind/Tailwind.lib"
import ButtonPrimary from "../components/molecules/ButtonPrimary.molecule"

const InputTask = ({ navigation }) => {
    const [value1, setValue1] = useState(null)
    const [value2, setValue2] = useState(null)
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const hitung = () => {
        if(!value1 && !value2) {
            setValue1(null)
            setValue2(null)

            return Alert.alert("Input Form Required", "Isi dua duanya woyy")
        }

        setResult(parseInt(value1) + parseInt(value2))

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1500);

        setValue1(null)
        setValue2(null)
    }

    const reset = () => {
        setResult(null)
    }

    return (
        <SafeAreaView>
            <ScrollView style={ Tailwind.style(`p-6 min-h-full bg-white`) } >
                <TextInput
                    style={ Tailwind.style(`w-full bg-gray-100 px-3 rounded-md border-2 border-gray-300`) }
                    placeholder="Bilangan pertama"
                    scrollEnabled={ false }
                    keyboardType="number-pad"
                    value={ value1 }
                    onChangeText={ (value) => setValue1(value) }
                />
                <TextInput
                    style={ Tailwind.style(`w-full bg-gray-100 px-3 rounded-md border-2 border-gray-300 mt-3`) }
                    placeholder="Bilangan kedua"
                    scrollEnabled={ false }
                    keyboardType="number-pad"
                    value={ value2 }
                    onChangeText={ (value) => setValue2(value) }
                />
                <TouchableHighlight underlayColor={ "#10101010" } style={ Tailwind.style(`rounded-sm w-full mt-4`) } onPress={ () => hitung() } >
                    <ButtonPrimary title={ "HITUNG BILANGAN" } />
                </TouchableHighlight>
                {
                    (
                        result ? 
                            loading ? 
                                <ActivityIndicator size={ 30 } color={ "#17D7A0" } style={ Tailwind.style(`mt-10`) } /> :
                                <Text style={ Tailwind.style(`font-bold text-gray-900 text-center mt-10 text-xl`) } >
                                    { result }
                                </Text> :
                                <Text style={ Tailwind.style(`font-bold text-gray-900 text-center mt-10 text-xl`) } >
                                    Hasil Bilangan
                                </Text>
                    )
                }
                {
                    (
                        !result ? 
                            null :
                            <TouchableHighlight underlayColor={ "#10101010" } style={ Tailwind.style(`rounded-sm w-full mt-10 flex flex-row justify-center`) } onPress={ () => reset() } >
                                <View style={ Tailwind.style(`w-1/2`) } >
                                    <ButtonPrimary title={ "RESET" } />
                                </View>
                            </TouchableHighlight>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default InputTask