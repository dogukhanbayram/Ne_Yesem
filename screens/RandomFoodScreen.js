import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, getFirestore, onSnapshot, QuerySnapshot, query } from "firebase/firestore";
import { Dimensions, ListViewBase, StyleSheet, Text, View, Image } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../App';
import { Button } from 'react-native-web';
import { querystring } from '@firebase/util';
import react from 'react';
import { render } from 'react-dom';


const RandomFoodScreen = () => {

    const [foods, setFoods] = useState([])

    const fetchFoods = async () => {
        const fetchedFoods = [];
        const q = query(collection(db, "Foods"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const index = querySnapshot.size;
            const randomID = Math.floor(Math.random() * index);
            fetchedFoods.push(querySnapshot.docs[randomID].data())
            setFoods(fetchedFoods);
        })
    }
    useEffect(() => {
        fetchFoods();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text style = {styles.textStyle}>
                              Bas butona rastgele yemek gelsin
                    </Text> */}
            <TouchableOpacity
                onPress={fetchFoods}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Yeni Getir
                </Text>
            </TouchableOpacity>
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
        </SafeAreaView>
    )
}

export default RandomFoodScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    button: {
        height: 60,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: 'orange',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
    card: {
        height: 230,
        backgroundColor: 'orange',
        elevation: 10,
        width: 'auto',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 20,
        padding: 15,
        borderRadius: 20
    },
    cardImage: {
        width: "100%",
        height: 120,
        borderRadius: 15,

    },
    // textStyle: {
    //     fontSize: 16,
    //     color: 'black',
    // },
})