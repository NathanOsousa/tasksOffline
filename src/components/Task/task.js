import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome'


export default props => {

    const isDoneStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : {}

    const getCheckView = (doneAt) => {
        if (doneAt != null) {
            return (
                <View style={style.done}>
                    <Icon name="check" size={20} color="#FFF" />
                </View>
            )
        } else {
            return (
                <View style={style.pendding} />
            )
        }
    }

    return (
        <View style={style.container}>
            <View style={style.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text style={[style.desc, isDoneStyle]}> {props.desc} </Text>
                <Text> {props.estimatedAt + ""}</Text>
            </View>
        </View>
    )

}
