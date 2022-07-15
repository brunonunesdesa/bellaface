import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Product(props){
    function filterDesc(desc){
        if(desc.length < 25){
            return desc;
        }

        return `${desc.substring(0,22)}...`;
    }
 
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image 
                source={{uri:props.data.imgUrl}}
                style={styles.productImg}
            />
            <Text style={styles.productText}>{filterDesc(props.children)}</Text>
            <View opacity={0.4}>
                <Text style={styles.productText}>R${props.data.price.toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );
 
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productText:{

    },
    productImg:{
        width: 200,
        height: 200
    },
    productText:{
        fontSize:16
    }
});