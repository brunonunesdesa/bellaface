import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import ItemCart from '../../component/ItemCart';
import { addToCart, getCartLocalStorage, removeFromCart, deleteProductFromCart } from '../../services/Cart';
import { Ionicons } from '@expo/vector-icons';


export default function Cart({route,navigation}) {

    const [itemCart, setItemCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [commentary, setCommentary] = useState('')
    
    const handleCommentaryChange = (e) => {
        setCommentary(e);
    }

    const fetchData = async () => {
        const response = await getCartLocalStorage();
        return setItemCart(response)
    }

    const handleAddToCart = (product) => {
        return addToCart(product).then(()=>fetchData());
    }

    const handleRemoveFromCart = (product) => {
        removeFromCart(product).then(()=>fetchData());
    }

    const handleDeleteFromCart = (id) => {
        deleteProductFromCart(id).then(()=>fetchData());
    }

    const handleClickImage = (product) => {
        navigation.navigate("Detail",product)
    }

    const sumTotalPrice = () => {
        let total = 0;
        itemCart?.forEach((e)=>{
            total += e.price*e.qtd;
        })
        setTotalPrice(total)
    }

    const createOrder = () => {
        let string = "";
        itemCart.forEach((e)=>{
            string += JSON.stringify(e)
        })
        alert(string)
    }

    const createCartConfirmDialog = () => {
        Alert.alert(
            "Fechamento de pedido",
            "Deseja realizar o pedido?",
            [
                {
                    text: "Confirmar",
                    style: "default",
                    onPress: createOrder
                },
                {
                    text: "Cancelar",
                    style: "cancel",
                }
            ],
            {
                cancelable: true
            }
        );
    }

    useEffect(() => {   
        fetchData();
    }
    , [])

    useEffect(()=>{
        sumTotalPrice()
    },[itemCart])

    return (
        <View style={styles.container}>
            
            {route.params !== null && <TouchableOpacity 
            onPress={()=>handleAddToCart(route.params).finally(() => route.params = null)}
            style={styles.container_new_item}>
                <Text style={styles.text_new_item}>
                    Adicionar: {route.params.name}
                </Text>
                <Ionicons 
                name="add-circle-outline" 
                size={30} color="white" 
                style={{position: "absolute", right:15, alignSelf: 'center'}}
                />
            </TouchableOpacity>}
            <Text style={styles.title_cart}>ITENS ADICIONADOS</Text>
            <View style={styles.line}></View>
            <ScrollView style={styles.container_cart}>
            {itemCart?.length > 0 && 
                itemCart.map((item,index)=>(
                    <ItemCart
                    key={index}
                    data={item} 
                    onClickPlus={(item)=>handleAddToCart(item)} 
                    onClickMinus={(item)=>handleRemoveFromCart(item)}
                    onClickDelete={(item)=>handleDeleteFromCart(item.id)}
                    handleClickImage={(item)=>handleClickImage(item)}
                />))
            }
            </ScrollView>
            {itemCart?.length > 0 && 
            (<View>
                <TextInput
                name="commentary"
                style={styles.input}
                onChangeText={(e)=>handleCommentaryChange(e)}
                value={commentary}
                placeholder="insira algum comentário..."
                />
            </View>)}
            {itemCart?.length > 0 && 
            (<View display="flex" flexDirection="row" justifyContent="space-evenly">
                <TouchableOpacity onPress={()=>createCartConfirmDialog()}>
                    <Text style={[styles.text_button,styles.button_blue]}>
                        FECHAR PEDIDO
                    </Text>
                </TouchableOpacity>
            </View>)}
            {itemCart?.length > 0 && 
                (<View>
                    <Text style={styles.text_total_price}>Total R$:{totalPrice.toFixed(2)}</Text>
                </View>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title_cart:{
        fontFamily: "PTSans_400Regular",
        fontSize:24,
        marginHorizontal: "1%",
        marginVertical: "1%",
        alignSelf: "center",
        fontWeight: "bold",
    },
    container_cart:{
        minHeight: 240
    },  
    container_new_item:{
        display:"flex",
        flexDirection:"row",
        spaceBetween: "middle",
        alignItems: "center",
        backgroundColor: "#49be25",
        padding: 15,
        marginBottom:10
    },
    text_new_item:{
        marginHorizontal: "1%",
        fontSize:22,
        color: "#fff"
    },
    line:{
        borderTopColor:"#222",
        marginBottom:20
    },
    text_total_price:{
        fontSize: 20,
        padding:"1%"
    },
    text_button:{
        color: "#fff",
        fontFamily: "PTSans_400Regular",
        fontSize:24,
        padding:10,
        alignSelf: "center",
        borderRadius: 2
    },
    button_blue:{
        backgroundColor:"#f07e26",
        marginVertical: "1%",
        borderRadius:10
    },
    button_red:{
        backgroundColor:"#aaaaaa",
        marginVertical: "1%",
        borderRadius:10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        borderBottomWidth: 0.5,
        padding: 10,
        backgroundColor: '#fff',
        fontSize:20
    }
})