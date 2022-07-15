import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCartLocalStorage = async () => {
    try {
        return JSON.parse(await AsyncStorage.getItem('@cart'));
    } catch (err) {
        console.log(err)
    }
}

const setCartLocalStorage = async (item) => {
    try {
        return await AsyncStorage.setItem(
        '@cart',
        JSON.stringify(item)
        );
    } catch (err) {
        console.log(err)
    }
};

export const clearCart = async () => {
    try {
        await AsyncStorage.removeItem("@cart")
    } catch (err) {
        console.log(err)
    }
}

export const deleteProductFromCart = async (id) => {
    try {

        let cart = await getCartLocalStorage()
        
        let achou = cart.find(e => e.id === id)

        cart.splice(cart.indexOf(achou), 1)

        return await setCartLocalStorage(cart)
        
    } catch (err) {
        console.log(err)
    }
}

export const addToCart = async (newProduct) => {
    try {

        let cart = await getCartLocalStorage()
        newProduct.qtd = 1

        if (cart == null) return setCartLocalStorage([{...newProduct}])
        
        let achou = cart.find(e => e.id === newProduct.id)
        if (achou) {
            switch (achou.qtd) {
                case undefined:
                    achou.qtd = 2
                    break;
            
                default:
                    achou.qtd++
                    break;
            }

        } else {
            cart.push(newProduct)
        }

        return await setCartLocalStorage(cart)
        
    } catch (err) {
        console.log(err)
    }
}

export const removeFromCart = async (product) => {
    try {
        
        let cart = await getCartLocalStorage()
        
        let achou = cart.find(e => e.id === product.id)
        switch (achou.qtd) {
            case 1:
                cart.splice(cart.indexOf(achou), 1)
                break;
        
            default:
                achou.qtd--;
                break;
        }
        
        return await setCartLocalStorage(cart)
        
    } catch (err) {
        console.log(err)
    }
}
