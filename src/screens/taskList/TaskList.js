import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import style from './style'
import todayImage from '../../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <View style={style.container}>
                <ImageBackground style={style.backGround} source={todayImage} />
                <View style={style.taskList}>
                    <Text>TaskList</Text>
                </View>
            </View>
        )
    }
}