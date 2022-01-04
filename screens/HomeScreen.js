import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleRandomFoodSuggest = () => {
        navigation.navigate("Random Food")
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <ScrollView>
                <StatusBar translucent backgroundColor='transparent' />
                <Image source={require('../images/food.jpg')}
                    style={styles.image}
                />
                <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                    <View>
                        <Text style={styles.title}>Bugün ne </Text>
                        <Text style={styles.title}>yemek istersin?</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.textStyle}>Ne çıkarsa artık karşına </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={handleRandomFoodSuggest}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Ne Yesem?
                    </Text>

                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >

    );
};

const styles = StyleSheet.create({

    button: {
        height: 60,
        marginTop: 40,
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
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: 'grey',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    indicatorActive: {
        backgroundColor: 'white'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    textStyle: {
        fontSize: 16,
        color: 'white'
    },

})
export default HomeScreen