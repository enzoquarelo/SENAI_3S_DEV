import { useEffect, useState } from 'react';
import moment from 'moment';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [history, setHistory] = useState(false);
  const [authentication, setAuthetication] = useState(false);
  const [biometricExist, setBiometricExist] = useState(false);

  async function CheckExistAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync()

    setBiometricExist(compatible)
  }

  async function SetHistory() {
    const objAuth = {
      dateAuthentication: moment().format("DD/MM/YYYY  HH:mm")
    }   

    await AsyncStorage.setItem("authetication", JSON.stringify(objAuth))

    setHistory(objAuth);
  }

  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem("authetication")
    
    if(objAuth){
      setHistory( JSON.parse(objAuth))
    }
  }

  async function handleAuthentication() {
    const biometric = await LocalAuthentication.isEnrolledAsync()

     //verifica se há alguma digital o faceID cadastrado
    if (!biometric) {
      return Alert.alert(
        "Falha ao Logar!",
        "Nenhuma biometria encontrada."
      )
    } 

    // Caso exista ->
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com Biometria'
    })

    setAuthetication( auth.success )

    if(auth.success){
      SetHistory()
    }
  }

  useEffect(() => {
    CheckExistAuthentication();

    GetHistory();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {biometricExist ? 'Seu dispositivo é compatível com a Biometria'
          : 'Seu dispositivo não é compatível com a Biometria / FaceId'}
      </Text>

      <TouchableOpacity style={styles.btnAuth} onPress={handleAuthentication}>
        <Text style={styles.txtAuth}> Autenticar Acesso</Text>
      </TouchableOpacity>

      <Text style={[styles.txtReturn, { color: authentication ? 'green' : 'red' }]}>
        {authentication ? 'Autenticado' : 'Não Autenticado'}
      </Text>

      {
       history.dateAuthentication ? <Text>Ultimo acesso em: {history.dateAuthentication}</Text>
       : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    width: '70%',
  },

  btnAuth: {
    padding: 16,
    borderRadius: 12,
    marginTop: 50,
    backgroundColor: '#496BBA'
  },

  txtAuth: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  txtReturn: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
  },
});
