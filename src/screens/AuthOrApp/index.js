import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import style from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const AuthOrApp = navigation => {
  useEffect(async () => {
    const userDataJson = await AsyncStorage.getItem('userData');
    let userData = null;

    try {
      userData = JSON.parse(userDataJson);
    } catch (error) {
      //user data inválido
    }

    if (userData && userData.token) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `bearer ${userData.token}`;
      navigation.navigate('Home', userData);
    } else {
      navigation.navigate('Auth', userData);
    }
  }, []);

  return (
    <View style={style.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AuthOrApp;
