import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, onSnapshot } from "firebase/firestore";
import { Dimensions, ListViewBase, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../App';
import { Button } from 'react-native-web';
import { querystring } from '@firebase/util';
import react from 'react';

async function getFoods(){
    const querySnapshot = await getDocs(collection(db, "Foods"));
    const foodlist = querySnapshot.docs.map(doc=>doc.data()); 
    console.log(foodlist);
    return foodlist;
}
const foodList = getFoods();

const RandomFoodScreen = () => {
    
    // const[foods,setFoods]=useState("")
    
    // const readData = () =>{
    //     getDocs(collection(db,"Foods")).then(snapshot=>{
    //         setFoods(Object.values(snapshot.val()))
    //     })
    // }

    
    
    // var foodList = [];
    // const getFoods = async()=>{
    //     const querySnapshot = await getDocs(collection(db, "Foods"));
    //     return querySnapshot.docs.map(doc=>doc.data());
    // }


    return(
            <View style = {styles.container}>
            {/* <TouchableOpacity
                onPress={getFoods()}
                style={styles.button}
            >
                <Text style = {styles.buttonText}>
                    Veri Getir
                </Text>
            </TouchableOpacity> */}
                <FlatList
                style={{marginTop:10,padding:10}}
                data={foodList}
                renderItem={({item}) => <Text> {item} </Text>}
                ItemSeparatorComponent={()=><View style ={{marginVertical:5,borderWidth:0.5}}/>}
                />
            </View>
        
    )
}

export default RandomFoodScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'blue',
        width:'60%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:40,
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'blue',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
})