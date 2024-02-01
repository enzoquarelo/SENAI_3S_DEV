import { Container } from './src/components/Container/Container';
import Header from './src/components/Header/Header';

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

      <Header/>
      
    </Container>
  );
}
