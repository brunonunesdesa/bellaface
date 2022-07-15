import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function Detail({route, navigation}) {
    const data = route.params;
    
    useEffect(()=>navigation.setOptions({
            headerTitle: data.name,
            headerRight: () => (
            <View>
                <TouchableOpacity style={{ marginRight: 15 }} onPress={()=>{
                        navigation.navigate('Cart',{
                            id: data.id,
                            name: data.name,
                            description: data.description,
                            price: data.price,
                            imgUrl: data.imgUrl
                        });
                    }}>
                    <Feather
                    name="shopping-cart"
                    size={28}
                    color="black"
                    />
                </TouchableOpacity>
            </View>  
            )
        })
    ,[])

    return (
        <ScrollView style={styles.container}>
            <Image
            source={{uri:route.params.imgUrl}}
            style={styles.image}
            resizeMode="cover"/>

            <View>
                <View>
                    <Text style={[styles.title, {fontSize:24}]}>R${data.price.toFixed(2)}</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize:30}]}>{data.name}</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize:22}]}>{data.description}</Text>
                </View>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff'
    },
    image:{
        height: 250,
        width:'100%'
    },
    title:{
        fontFamily: 'PTSans_400Regular',
        paddingHorizontal: '2%'
    }
});