import { StatusBar } from 'react-native';
import { ContainerHeader } from './styles';
import { Title } from './styles';

import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';

export default function Header() {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_500Medium,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ContainerHeader>
            <StatusBar
                backgroundColor="#FECC2B"
                barStyle="dark-content"
            />

            <Title fontFamily="Roboto_500Medium" fontSize="24px">Consumo de API ViaCep</Title>
        </ContainerHeader>
    );
}