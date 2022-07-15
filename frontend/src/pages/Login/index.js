import React, { useState } from 'react';
import { StyleSheet, Text, TextInput,  View } from 'react-native';
import loginRequest from '../../services/auth';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({navigation}) {

  const [user,setUser] = useState({
    username:'alex@gmail.com',
    password:'123456'
  });

  const handleChange = (newState, attribute) => {
    setUser({...user, [attribute]:newState})
  }

  const onPress = () => {
    loginRequest({...user}).then(()=>{
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }).catch(err =>{{
      alert(err)
    }})
  }

  return (
   <View style={{flex: 1, width: '100%', flexDirection: 'column'}}>
    <TextInput 
    name="username"
    style={styles.input} 
    onChangeText={(e)=>handleChange(e,"username")} 
    value={user.username}
    placeholder="username" />
    <TextInput
      name="username"
      style={styles.input}
      onChangeText={(e)=>handleChange(e, "password")}
      value={user.password}
      placeholder="password"
      secureTextEntry={true}
    />
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </View>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 0,
    padding: 10,
    fontSize:22,
    backgroundColor: '#fff'
  },
  button: {
    margin: 12,
    padding: 10,
    backgroundColor: '#fff',
    fontSize:26,
  },
  buttonText:{
    fontSize:22,
    fontFamily: "PTSans_400Regular",
    alignSelf: "center",
  }
});