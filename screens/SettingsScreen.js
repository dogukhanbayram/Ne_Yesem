import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
        <View style = {styles.container}>
            <Text>
                Email: {auth.currentUser?.email}
            </Text>
            <TouchableOpacity
                onPress={()=>{handleSignOut(auth);navigation.replace('Login')}}
                style={styles.button}
            >
                <Text style = {styles.buttonText}>
                    Sign Out
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
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