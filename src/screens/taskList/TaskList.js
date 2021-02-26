import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import style from './style'
import todayImage from '../../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt'

const today = moment().local('pt-br').format('ddd, D [de] MMMM');
export default class TaskList extends Component {

    render() {
        return (
            <View style={style.container}>
                <ImageBackground style={style.backGround} source={todayImage}>
                    <View style={style.titleBar}>
                        <Text>Hoje</Text>
                        <Text>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={style.taskList}>
                    <Text>TaskList</Text>
                </View>
            </View>
        )
    }
}