import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const handleSignOut = (auth) => {
    signOut(auth)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
        })
}

const Settings = () => {
    const navigation = useNavigation();
    const auth = getAuth();
    return (

        <View >
            <ScrollView>
                <View style={{
                    backgroundColor: 'black',
                    padding: 10,
                    width: '100%',
                    height: 200
                }}>
                    <View></View>
                    <View></View>
                </View>
                <View style={{ alignItems: 'center' }} >
                    <Image source={require('../images/Login.jpeg')} style={{ width: 200, height: 200, borderRadius: 100, marginTop: -70 }}></Image>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }} > User </Text>
                </View>

                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'grey',
                    width: '90%',
                    padding: 20,
                    paddingBottom: 22,
                    borderRadius: 10,
                    elevation: 15,
                    marginTop: 20,
                    shadowOpacity: 80
                }} >
                    <Text style={{ fontWeight: 'bold' }} >
                        Email: {auth.currentUser?.email}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => { handleSignOut(auth); navigation.replace('Login') }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Sign Out
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
})