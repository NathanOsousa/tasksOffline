import globalStyles from '../../globalStyles'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    backGround: {
        flex: 3
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: globalStyles.fontFamily,
        color: globalStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: globalStyles.fontFamily,
        color: globalStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 20,
    }
})