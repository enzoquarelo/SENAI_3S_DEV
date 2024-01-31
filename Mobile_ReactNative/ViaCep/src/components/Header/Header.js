import { ContainerHeader } from './src/components/Container/Container';
import { Title } from './src/components/Title/Title';

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
            <Title fontFamily="Roboto_500Medium" fontSize="24px">Consumo de API ViaCep</Title>
        </ContainerHeader>
    );
}