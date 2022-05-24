import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { auth } from '../firebase'

const LoadingScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    }) 
  }, [navigation])
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser) {
          navigation.replace("Home");
        }else{
          navigation.replace("Login");
        }
    });
    return unsubscribe;
  }, [])
  return (
    <View style={styles.container}>
      <Text>LoadingScreen</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})