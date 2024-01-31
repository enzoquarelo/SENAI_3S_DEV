import { StatusBar } from 'react-native';

import { Container, ContainerHeader } from './src/components/Container/Container';
import { Title } from './src/components/Header/styles';


import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Container>

      <ContainerHeader>
            <Title fontFamily="Roboto_500Medium" fontSize="24px">Consumo de API ViaCep</Title>
      </ContainerHeader>

    </Container>
  );
}
