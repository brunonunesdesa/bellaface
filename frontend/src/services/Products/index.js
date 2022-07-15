import getToken from '../token';
import {api, config} from '../apiConfig';

export const getProducts = (size) => {

    return getToken().then( (credentials) => {
        const data = JSON.parse(credentials)
        return api.request({
            method:'GET',
            url: `${config.baseUrl}/products?size=${size}`,
                headers: {
                    'Authorization': `Bearer ${data["access_token"]}`
                }
        }).then(res => {
            if (res.status >= 200 && res.status < 300) {
                return Promise.resolve(res);
            } else {
                return Promise.reject(res);
            }
        }).catch((err) => {
            return Promise.reject(err);
        })
    })
}