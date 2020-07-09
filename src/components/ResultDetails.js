import React from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'

const ResultDetails = ({item}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image_url}} />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Reviews.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name:{
        fontWeight:'bold',
        fontSize: 16
    }
})

export default ResultDetails
