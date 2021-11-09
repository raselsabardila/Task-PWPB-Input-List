import React from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import ItemHeroesList from "../components/orgnisms/ItemHeroesList.organism";
import Tailwind from "../libs/tailwind/Tailwind.lib"

const ListTask = ({ navigation }) => {
    const heroes = [
        {
            "name": "Spiderman",
            "team": "Avengers",
            "image": "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            "name": "Batman",
            "team": "Justice League",
            "image": "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            "name": "Superman",
            "team": "Justice League",
            "image": "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXJtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            "name": "Captain America",
            "team": "Avengers",
            "image": "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80"
        },
    ]

    return (
        <SafeAreaView>
            <View style={ Tailwind.style(`min-h-full bg-white p-3`) } >
                <FlatList
                    data={ heroes }
                    showsVerticalScrollIndicator={ false }
                    ItemSeparatorComponent={ () => <View style={ Tailwind.style(`mb-3`) } /> }
                    renderItem={ ({ item, index }) => <ItemHeroesList key={ index } item={ item } /> }
                />
            </View>
        </SafeAreaView>
    )
}

export default ListTask