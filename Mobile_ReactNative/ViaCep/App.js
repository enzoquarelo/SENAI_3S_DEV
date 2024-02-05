import React, { useEffect, useState } from 'react';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Header } from './src/components/header';
import { Container } from './src/components/container/container';
import { Input, InputEstado, InputUF } from './src/components/input/input';
import { Label } from './src/components/labelinput/labelinput';
import { InputContainer, InputUFContainer } from './src/components/inputContainer/inputContainer';
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import api from './Services/Service';

export default function App() {
  const [endereco, setEndereco] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [uf, setUf] = useState("");

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });

  useEffect(() => {
    const fetchAddressInfo = async () => {
      try {
        const response = await api.get(`${viaCepUrl}`);
        const data = response.data;

        setLogradouro(data.logradouro || "");
        setBairro(data.bairro || "");
        setCidade(data.localidade || "");
        setEstado(data.uf || "");
        setUf(data.ibge || "");

      } catch (error) {

        console.error("Erro ao obter informações do CEP:", error);

      }
    };
  }, [endereco]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Header />
      <Container>
        <InputContainer>
          <Label>Informar CEP:</Label>
          <Input
            value={endereco}
            onChangeText={setEndereco}
            placeholder="Cep..."
            keyboardType="numeric"
          />
        </InputContainer>

        <InputContainer>
          <Label>Logradouro:</Label>
          <Input value={logradouro} placeholder="Rua..." />
        </InputContainer>

        <InputContainer>
          <Label>Bairro:</Label>
          <Input value={bairro} placeholder="Bairro..." />
        </InputContainer>

        <InputContainer>
          <Label>Cidade:</Label>
          <Input value={cidade} placeholder="Cidade..." />
        </InputContainer>

        <InputUFContainer>
          <InputContainer>
            <Label>Estado:</Label>
            <InputEstado value={estado} placeholder="Estado..." />
          </InputContainer>

          <InputContainer>
            <Label>UF:</Label>
            <InputUF value={uf} placeholder="UF" />
          </InputContainer>
        </InputUFContainer>

      </Container>
      
      <StatusBar backgroundColor={"#FECC2B"} barStyle={"dark-content"} />
    </>
  );
}