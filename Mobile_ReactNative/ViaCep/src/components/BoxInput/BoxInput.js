import { useFonts } from '@expo-google-fonts/roboto';

export default function Header() {

    let [fontsLoaded, fontError] = useFonts({
        Roboto_500Medium,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <FieldContent>
            <Label textLabel={textLabel}/>

            <Input
                placeholder={placeholder}
                editlabel={editlabel}
                KeyType={KeyType}
                 
            />
        </FieldContent>
    );
}