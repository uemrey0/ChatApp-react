import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword ] = useState("");
  const signIn = () => {
    
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser) navigation.replace("Home");
    });
    return unsubscribe;
  }, []);
  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
        <StatusBar style='light' />
        <Image source={{
            uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
        }} style={{width: 150, height: 150}} />
        <View style={styles.inputContainer}>
            <Input placeholder='Email' autoFocus type="email" value={email} onChangeText={(text)=>setEmail(text)} />
            <Input placeholder='Password' secureTextEntry type="password" value={password} onChangeText={(text)=>setPassword(text)} />
        </View>
        <Button containerStyle={styles.button} onPress={signIn()} title="Login" /> 
        <Button  onPress={() => {navigation.navigate("Register")}} containerStyle={styles.button} type="outline" title="Register" /> 
        <View style={{height:100}} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,

    },
    inputContainer: {
        width: 300,
        paddingTop: 50,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})