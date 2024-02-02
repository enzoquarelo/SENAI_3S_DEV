import { BoxInput } from "../../components/boxInput"

export const Home = () => {
    return(
        <>
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                textLabel="Informe o CEP"
                placeholder="CEP..."
                KeyType="numeric"
                maxLenght={9}
                
                />
            </ContainerForm>
        </ScrollForm>
        </>
    )
}