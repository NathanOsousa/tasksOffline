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
                        <Text style={style.title}>Hoje</Text>
                        <Text style={style.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={style.taskList}>
                    <Text> Task #01 </Text>
                    <Text> Task #02</Text>
                    <Text> Task #03</Text>
                </View>
            </View>
        )
    }
}