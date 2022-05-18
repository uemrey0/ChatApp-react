import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar, } from 'react-native-elements'
import React from 'react'
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content'

const CustomListItem = ({id,chatName,enterChat}) => {
  return (
    <ListItem onPress={() => enterChat(id,chatName)} key={id} bottomDivider>
        <Avatar rounded source={{uri: "https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"}} />
        <ListItem.Content>
            <ListItem.Title style={{fontWeight: "800"}}>
                {chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                This is a Subtitle
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})