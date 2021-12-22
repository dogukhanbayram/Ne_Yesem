import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RecipeScreen = ({route}) => {
    
    const navigation = useNavigation()
    navigation.setOptions({ title: route.params.paramKey.name })

    return(
        <View style={styles.container}>
        <Text>{route.params.paramKey.name}</Text>
        <Text>{route.params.paramKey.ingredients.join(', ')}</Text>
        </View>

    )
}
export default RecipeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})