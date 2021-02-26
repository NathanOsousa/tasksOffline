import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import style from './style'
import moment from 'moment'
import 'moment/locale/pt'


export default props => {
    return (
        <View style={style.container}>
            <View style={style.taskList}>
                <Text> {props.desc} </Text>
                <Text> {props.estimatedAt + ""}</Text>
                {props.doneAt && <Text> {props.doneAt + ""}</Text>}
            </View>
        </View>
    )

}
