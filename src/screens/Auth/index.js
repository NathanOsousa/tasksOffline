import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import backgroundImage from '.././../../assets/imgs/login.jpg';
import style from './style';
import Input from './input';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const singInOrSignUp = () => {
    if (isRegister) {
      Alert.alert('Sucess!', 'Criar conta');
    } else {
      Alert.alert('Sucess!', 'Criar conta');
    }
  };

  return (
    <ImageBackground style={style.background} source={backgroundImage}>
      <Text style={style.title}>Tasks</Text>
      <View style={style.formContainer}>
        <Text style={style.subtitle}>
          {isRegister ? 'Crie sua conta' : 'Informe seus dados'}
        </Text>
        {isRegister && (
          <Input
            icon="user"
            placeholder="Nome"
            value={name}
            onChangeText={n => setName(n)}
            style={style.input}
          />
        )}
        <Input
          icon="at"
          placeholder="E-mail"
          value={email}
          onChangeText={e => setEmail(e)}
          style={style.input}
        />
        <Input
          icon="lock"
          placeholder="Senha"
          value={password}
          onChangeText={p => setPassword(p)}
          style={style.input}
        />
        {isRegister && (
          <Input
            icon="asterisk"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChangeText={e => setConfirmPassword(e)}
            style={style.input}
          />
        )}
        <Pressable style={style.button} onPress={singInOrSignUp}>
          <Text style={style.buttonText}>
            {isRegister ? 'Registrar' : 'Entrar'}
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={{padding: 10}}
        onPress={() => setIsRegister(!isRegister)}>
        <Text style={style.buttonText}>
          {isRegister ? 'Já possui conta?' : 'Ainda não possui conta?'}
        </Text>
      </Pressable>
    </ImageBackground>
  );
};

export default Auth;
