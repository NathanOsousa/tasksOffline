import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'



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

    const date = props.doneAt ? props.doneAt : props.estimatedAt
    const formatedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={style.container}>
            <View style={style.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text style={[style.desc, isDoneStyle]}> {props.desc} </Text>
                <Text style={style.date}> {formatedDate}</Text>
            </View>
        </View>
    )

}
