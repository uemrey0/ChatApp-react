import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Avatar } from 'react-native-elements';
import {AntDesign, Ionicons, FontAwesome} from "@expo/vector-icons";

const ChatScreen = ({navigation, route}) => {
    const [input, setInput] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View style={{flexDirection: "row", alignItems: "center",}}>
                    <Avatar rounded source={{uri: "https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"}} />
                    <Text style={{color: "white", marginLeft: 10, fontWeight: "700"}}>{route.params.chatName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name='arrowleft' size={25} color="white" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{flexDirection: "row", justifyContent: "space-between", width: 80, marginRight: 10,}}>
                    <TouchableOpacity>
                        <FontAwesome name='video-camera' size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='call' size={24} color="white" />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation]); 
    const sendMessage = () => {

    };
    return (
        <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
            <StatusBar style='light'/>
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset= {90}
            >
                <>
                    <ScrollView>
                        {/** chat is here */}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput placeholder='Type a massage ...' style={styles.textInput} value={input} onChangeText={(text)=>setInput(text)} />
                        <TouchableOpacity style={{backgroundColor: "#2B6BE6", padding: 7.5, borderRadius: 30}} onPress={sendMessage} activeOpacity={0.5}>
                            <Ionicons name='send' size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    
                </>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        backgroundColor: "#ECECEC",
        padding: 10,
        color: "grey",
        borderRadius: 30
    },
})