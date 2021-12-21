import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, getFirestore, onSnapshot, QuerySnapshot, query } from "firebase/firestore";
import { Dimensions, ListViewBase, StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { db } from '../App';

const AllFoodsScreen = () => {

    const [foods, setFoods] = useState([])

    const fetchFoods = async () => {
        const fetchedFoods = [];
        const q = query(collection(db, "Foods"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                fetchedFoods.push(doc.data());
            })
            setFoods(fetchedFoods);
        })
    }
    useEffect(() => {
        fetchFoods();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20
                    }}>
                    <View style={styles.searchInputContainer}>
                        <TextInput placeholder='Search Food'></TextInput>
                    </View>
                    <View style={styles.sortBtn}></View>
                </View>

                <FlatList
                    contentContainerStyle={{ marginBottom: 20, marginVertical: 20, marginTop: 20 }}
                    data={foods}
                    renderItem={({ item }) =>

                        <View style={styles.card}>
                            <Image source={foods.Image} style={styles.cardImage} />
                            <Text style={{ fontSize: 24, fontWeight: "bold" }}> {item.name} </Text>
                            <Text style={{ fontSize: 18 }}> İçindekiler: </Text>
                            <Text> {item.ingredients.join(' ')} </Text>
                        </View>
                    }
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default AllFoodsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: 'blue',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'blue',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    optionListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20
    },
    card: {
        height: 230,
        backgroundColor: 'orange',
        elevation: 10,
        width: 'auto',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        padding: 15,
        borderRadius: 20
    },
    cardImage: {
        width: "100%",
        height: 120,
        borderRadius: 15,
    },
    searchInputContainer: {
        marginTop: 20,
        height: 50,
        backgroundColor: 'lightgrey',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10
    },
    sortBtn: {
        marginTop: 20,
        backgroundColor: 'lightgrey',
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
})