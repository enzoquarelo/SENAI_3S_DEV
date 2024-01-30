import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }


  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado, novo valor: ${count}`)
  }, [count])

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Contador: {count}</Text>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.textButton}>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDecrement} onPress={decrement}>
          <Text style={styles.textButton}>Decrementar</Text>
        </TouchableOpacity>
      </View>

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

  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 15,
  },

  textButton: {
    color: 'white',
    fontSize: 16,
  },

  button: {
    width: 120,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    backgroundColor: 'rgb(34, 78, 128)',
    borderWidth: 1,
    borderRadius: 5,
  },

  buttonDecrement: {
    width: 120,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    backgroundColor: 'rgb(128, 7, 2)',
    borderWidth: 1,
    borderRadius: 5,
  },

  containerButtons: {
    width: 250,

    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
