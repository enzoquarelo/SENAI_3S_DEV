import { Container } from './src/components/Container/Container';
import { Input } from './src/components/Input/Input';
import Header from './src/components/Header/Header';

import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { useEffect, useState } from 'react';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [endereco, setEndereco] = useState("");

  return (
    <Container>

      <Header />

      {/* <Label>Informar CEP:</Label> */}
      <Input
        value={endereco}
        onChangeText={setEndereco}
        placeholder="XXXXXX-XX"
        keyboardType="numeric"></Input>

    </Container>
  );
}
