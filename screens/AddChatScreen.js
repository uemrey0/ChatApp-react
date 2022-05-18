import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Button, Icon, Input } from 'react-native-elements'
import { db } from '../firebase';

const AddChatScreen = ({navigation}) => {
    const [input, setInput] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Chats",
            title: "Add a New Chat",
        })
    }, [navigation]);  
    const createChat = async () => {
        await  db.collection("chats").add({
            chatName: input
        }).then(() => {
            navigation.goBack();
        }).catch((error) => alert(error));
    };
    return (
    <View style={styles.container} >
        <Input placeholder='Enter a chat name' onSubmitEditing={createChat} onChangeText={(text) => setInput(text)} value={input} leftIcon={
            <Icon name='wechat' type='antdesign' size={24} color="black" />
        } />
        <Button onPress={createChat} title="Create new chat"/>
    </View>
  ) 
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
})