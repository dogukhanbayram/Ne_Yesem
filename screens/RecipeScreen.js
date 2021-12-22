import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const RecipeScreen = ({ route }) => {

    const navigation = useNavigation()
    navigation.setOptions({ title: route.params.paramKey.name })

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../images/patates.jpg')}
                style={styles.image}
                imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
            >
                <Text style={styles.Placename}>{route.params.paramKey.name}</Text>
            </ImageBackground>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Text style={{ padding: 14, fontSize: 28, fontWeight: 'bold' }}>İçindekiler</Text>
                <Text style={styles.TagLine}>{route.params.paramKey.ingredients.join(', ')}</Text>
                <Text style={{ padding: 14, fontSize: 28, fontWeight: 'bold', marginTop: 15 }}>Yemek Tarifi </Text>
                <Text style={styles.TagLine}>{route.params.paramKey.recipe}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        height: 350,
        justifyContent: 'flex-end',
    },
    TagLine: {
        paddingHorizontal: 14,
        fontSize: 14,
        fontWeight: 'normal',
        opacity: 0.6,
        justifyContent: 'flex-start',
        textAlign: 'justify',
        lineHeight: 26
    },
    Placename: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30
    }
});

export default RecipeScreen