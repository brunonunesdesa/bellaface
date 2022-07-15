import {api, config} from './apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUserData = async (userCredentials) => {
    try {
        return await AsyncStorage.setItem(
        '@usr',
        JSON.stringify(userCredentials)
        );
    } catch (error) {
        
    }
};

const loginRequest = async ({username,password}) => {
    await api.request({
        method:'POST',
        url: `${config.baseUrl}/oauth/token`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': "Basic ZHNjYXRhbG9nOmRzY2F0YWxvZzEyMw=="
            },
            params: {
            grant_type: "password",
            username,
            password
        }
    }).then(res => {
        if (res.status >= 200 && res.status < 300) {
            
            return Promise.resolve(storeUserData(res.data));
        } else {
            return Promise.reject(res);
        }
    }).catch((err) => {
        return Promise.reject(err);
    })
}

export default loginRequest;