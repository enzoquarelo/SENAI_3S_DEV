import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, TextInput, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [fonts] = useFonts({
    'MontserratAlternates-Bold': require('./assets/fonts/Montserrat_Alternates/MontserratAlternates-Bold.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image source={require('./assets/VitalHub_Logo_white.png')} />

      <View style={styles.containerForms}>
        <Text style={styles.title}>Entrar ou criar conta</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário ou seu E-mail"
          placeholderTextColor={'rgb(49, 179, 186)'}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={'rgb(49, 179, 186)'}
        />
        <Text>Esqueceu sua senha?</Text>
      </View>

      <View style={styles.containerButtons}>

        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.textButtonEntrar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGoogle}>
          <Text>ENTRAR COM GOOGLE</Text>
        </TouchableOpacity>

        <Text>Não tem conta? Crie uma conta agora!</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 529,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  containerForms: {
    width: 320,
    height: 201,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  containerButtons: {
    width: 320,
    height: 153,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

   title: {
     width: 200,
     fontFamily: 'MontserratAlternates-Bold',
     fontSize: 20,
   },

  input: {
    height: 53,
    borderColor: 'rgb(49, 179, 186)',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    width: 320,
  },

  buttonEntrar: {
    width: 320,
    height: 44,
    backgroundColor: 'rgb(73, 107, 186)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  buttonGoogle: {
    width: 320,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(73, 107, 186)',
    borderWidth: 1,
    borderRadius: 5,
  },

  textButtonEntrar: {
    color: 'white',
    fontSize: 14,
  }
});
