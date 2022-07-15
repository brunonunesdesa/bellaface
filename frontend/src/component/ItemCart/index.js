import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ItemCart(props){

    function filterDesc(desc){
        if(desc?.length < 15){
            return desc;
        }

        return `${desc?.substring(0,15)}...`;
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.container_info} onPress={props.onClick}>
                <TouchableOpacity onPress={()=>props.handleClickImage(props.data)}>
                    <Image
                        source={{uri:props.data?.imgUrl}}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={styles.cartText}>{filterDesc(props.data?.name)}</Text>
                    <View opacity={0.4} alignSelf="flex-start">
                        <Text style={styles.cartText}>R${props.data?.price?.toFixed(2)}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container_actions}>
                <View style={styles.container_trash}>
                    <TouchableOpacity onPress={()=>props.onClickDelete(props.data)}>
                        <Ionicons name="close" size={22} color="#999999" />
                    </TouchableOpacity>
                </View>  
                <View style={styles.container_buttons}>
                    <TouchableOpacity style={styles.button_plus} onPress={()=>props.onClickPlus(props.data)}>
                        <Feather 
                            name="plus" 
                            size={22} color="#fff" 
                        />
                    </TouchableOpacity>
                    <View style={styles.qtd_view}>
                        <Text style={styles.qtd_text}>{props.data.qtd}</Text>
                    </View>
                    <TouchableOpacity style={styles.button_minus} onPress={()=>props.onClickMinus(props.data)}>
                        <Feather 
                            name="minus" 
                            size={22} color="#fff" 
                            />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
 
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:"row",
        justifyContent: "space-between",
        paddingVertical: '2%',
        paddingHorizontal: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        width: '100%'
    },
    container_info:{
        display: 'flex',
        flexDirection:"row"
    },
    image:{
        height: 115,
        width: 115,
    },
    cartText:{
        fontSize:16,
        alignSelf: 'flex-start',
    },
    container_actions:{
        height: 135,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    container_trash:{
        alignSelf:"flex-end",
    },
    container_buttons:{
        alignSelf:"flex-end",
        flexDirection:"row",
        alignItems: 'center'
    },
    button_plus:{
        backgroundColor:"#49ae2f",
        borderRadius:100,
        padding:1
    },
    button_minus:{
        backgroundColor:"#dddddd",
        borderRadius:100,
        padding:1
    },
    qtd_text:{
        fontSize: 18,
        
    },
    qtd_view:{
        borderBottomColor:"#dddddd",
        padding: 8
    },
    
});