import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as Notifications from "expo-notifications";

Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //alerta ao receber notificação
    shouldShowAlert: true,

    //reproduzir som ao receber notificação
    shouldPlaySound: false,

    //mostra se há notificações não lidas no aplicativos
    shouldSetBadge: false,
  })
});

export default function App() {

  

  return (
    <View style={styles.container}>
      <Text>expo-notifications</Text>
      <StatusBar style="auto" />
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
});
