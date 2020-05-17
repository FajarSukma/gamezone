import  React, { useState } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({navigation}) {

    const pressHandler = () => {
        navigation.goBack();
    }

    const rating = navigation.getParam('rating')
    console.log('RATINGGG : ' + rating)
    return(
        <View style={globalStyles.container}>
            <Card>            
            <Text>{ navigation.getParam('title')}</Text> 
            <Text>{ navigation.getParam('body')}</Text> 
            {/* <Text>{ navigation.getParam('rating')}</Text>*/}
            <View style={styles.rating}>
                <Text>Game Zone Rating : </Text>
                <Image source={images.rating[rating]}/>
            </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor: '#eee'
    }
})

