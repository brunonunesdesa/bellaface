import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#fff' } }}>
                <Stack.Screen name="Login" component={Login}
                options={{ headerTitle: "BELLAFACE"}}
                />
            </Stack.Group>
            <Stack.Group 
            screenOptions={{
                headerStyle: { backgroundColor: '#fff' },
            }}>
                <Stack.Screen name="Home" component={Home}
                options={{ headerTitle: "HOME"}}
                />
                <Stack.Screen name="Detail" component={Detail}/>
                <Stack.Screen name="Cart" component={Cart}
                options={{ headerTitle: "Carrinho de compras"}}
                />
            </Stack.Group>                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;