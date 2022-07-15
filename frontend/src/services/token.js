import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    try {
        return await AsyncStorage.getItem('@usr');
    } catch (err) {

    }
}

export default getToken;