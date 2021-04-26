import React from 'react';
import {ScrollView, View, StyleSheet, Text, Pressable} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {Gravatar} from 'react-native-gravatar';
import globalStyles from '../../globalStyles';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
  const logout = () => {
    delete axios.defaults.headers.common['Authorizaiton'];
    AsyncStorage.removeItem('userData');
    props.navigation.navigate('AuthOrApp');
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <Gravatar
          style={styles.avatar}
          options={{
            email: 'nosousa.2000@gmail.com',
            // email: props.navigation.getParam('email'),
            secure: true,
          }}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>Nathan de oliveira</Text>
        <Text style={styles.email}>nosousa.2000@gmail.com</Text>
        {/* <Text>{props.navigation.getParam('name')}</Text>
        <Text>{props.navigation.getParam('email')}</Text> */}
      </View>
      <Pressable onPress={logout}>
        <View style={styles.logoutIcon}>
          <Icon name="sign-out" size={30} color="#800" />
        </View>
      </Pressable>
      <DrawerItems {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    borderWidth: 1,
    borderColor: '#DDD',
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 30,
    margin: 10,
    backgroundColor: '#222',
  },
  title: {
    color: '#000',
    fontFamily: globalStyles.fontFamily,
    fontSize: 30,
    paddingTop: 30,
    padding: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
  name: {
    fontFamily: globalStyles.fontFamily,
    fontSize: 20,
    marginBottom: 5,
    color: globalStyles.colors.mainText,
  },
  email: {
    fontFamily: globalStyles.fontFamily,
    color: globalStyles.colors.subText,
    fontSize: 15,
    marginBottom: 10,
  },
  logoutIcon: {
    marginLeft: 10,
    marginBottom: 10,
  },
});
