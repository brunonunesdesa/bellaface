import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons'; 
import Product from '../../component/Product';
import {getProducts} from '../../services/Products'

export default function Home({navigation}) {

    const [products, setProducts] = useState({});
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
            <View>
                <TouchableOpacity style={{ marginRight: 15 }} onPress={()=>{
                        navigation.navigate('Cart',null);
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
        async function fetchData() {
            // You can await here
            const response = await await getProducts(4);
            
            setProducts(response.data)
        }
        fetchData();
    },[])

    const ListFooterComponent = () => {
        return (<View style={styles.listFooter}>
            <Text style={styles.text}>CARREGANDO...</Text>
        </View>)
    }

    const renderItem = ({ item }) => {
        return <Product 
                data={item} 
                onClick={()=>navigation.navigate("Detail",item)}>
                    {item.name}
                </Product>
    };

    let stopFetchMore = true;

    const handleOnEndReached = async () => {
        setLoadingMore(true);
        if (!stopFetchMore && !products.last) {
            const res = await getProducts(products.numberOfElements+2)
            .then(({data}) => {
                setProducts(data)
                if (data.last) return setLoadingMore(false);
                setProducts({...products, ...data})
                stopFetchMore = true;
            })
        }
        setLoadingMore(false);
    }

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image
                source={require('../../assets/banner.png')}
                style={styles.image}
                />    
                <View style={styles.textContainer}>
                    <Text style={styles.text}>LOJA</Text>
                    <Text style={styles.text}>•</Text>
                    <Text style={styles.text}>BELLAFACE</Text>
                    <TouchableOpacity style={{position: "absolute", right:0, alignSelf: 'center'}}>
                        <Ionicons 
                            name="filter" 
                            size={24} 
                            color="black" 
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line}/>

            <View style={styles.flatList}>
                <FlatList
                    onScrollBeginDrag={()=>
                        stopFetchMore = false
                    }
                    data={products.content}
                    renderItem={renderItem}
                    horizontal={false}
                    keyExtractor={item => item.id}
                    onEndReached={handleOnEndReached}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={() => loadingMore && <ListFooterComponent/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        backgroundColor:"#fff"
    },
    header:{
        marginBottom: 8
    },
    image:{
        alignSelf:"center",
        width:"100%",
    },
    textContainer:{
        flexDirection: "row",
        marginVertical: "5%",
        marginHorizontal: "5%"
    },
    text:{
        fontFamily: "PTSans_400Regular",
        fontSize:26,
        marginHorizontal: "1%"
    },
    flatList:{
        flex: 1
    },
    listFooter:{
        width:"100%",
        fontSize: 20,
        alignItems: "center",
    }
})