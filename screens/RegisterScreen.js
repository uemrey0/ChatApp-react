 import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
 import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Text} from 'react-native-elements'
import { auth } from '../firebase';
 
 const RegisterScreen = ({navigation}) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [ımageUrl, setImageUrl] = useState("");
   
   useLayoutEffect(() => {
     navigation.setOptions({
         headerBackTitle: "Back to Login",
     })
   }, [navigation])

   const register = () => {
       auth.createUserWithEmailAndPassword(email,password).then(authUser => {
           authUser.user.updateProfile({
            displayName: name,
            photoURL: ımageUrl || "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
           });
       }).catch((error) => alert(error.message));
   };
   return (
     <KeyboardAvoidingView behavior='padding' style={styles.contaner}>
       <StatusBar style='light' />
       <Text h3 style={{marginBottom: 50,}}>Create a Signal Account</Text>
       <View style={styles.inputContainer }> 
            <Input placeholder='Full Name' autoFocus type="text" onChangeText={(text)=>{setName(text)}} value={(name)} />
            <Input placeholder='Email' type="email" onChangeText={(text)=>{setEmail(text)}} value={(email)} />
            <Input placeholder='Password' secureTextEntry type="password" onChangeText={(text)=>{setPassword(text)}} value={(password)} />
            <Input placeholder='Image URL' type="text" onChangeText={(text)=>{setImageUrl(text)}} value={(ımageUrl)} onSubmitEditing={register} />
       </View>
       <Button style={styles.button} raised onPress={register} title="Register" />
       <View style={{height:100}} />
     </KeyboardAvoidingView>
   )
 }
 
 export default RegisterScreen
 
 const styles = StyleSheet.create({
     contaner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
     },
     inputContainer: {
        width: 300,
     },
     button: {
        width: 200,
        marginTop: 10,
     },
 })