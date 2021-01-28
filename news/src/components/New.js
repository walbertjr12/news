import React from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import urlParse from 'url-parse';
import moment from 'moment'
import es from 'moment/locale/es'


export default function New(props) {
    const {data: {title, url, created_at}} = props

    const openUrl = () =>{
        Linking.openURL(url)
    }

    return (
        <TouchableOpacity onPress={openUrl}>
            <View style={styles.new}>
                <Text style={styles.url}>{urlParse(url).host}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.time}>{moment(created_at).local(es).startOf().fromNow()}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    new: {
        padding: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    url: {
        paddingBottom: 5,
        color: 'grey'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    },
    time:{
        paddingTop: 10,
        color: 'gray'
    }
})
