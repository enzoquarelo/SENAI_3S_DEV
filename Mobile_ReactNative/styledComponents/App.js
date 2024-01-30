import { StatusBar } from 'react-native';
import { useEffect, useState } from 'react';

import { Container, ContainerButtons } from './src/components/Container/Container';
import { Title, TitleButton } from './src/components/Title/Title';
import { ButtonIncrement, ButtonDecrement } from './src/components/Button/Button';
import { Image } from './src/components/Image/Image';

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
    <Container>

      <StatusBar />

      <Image source={require('./assets/ampulheta.png')} />

      <Title>Contador: {count}</Title>

      <ContainerButtons>

        <ButtonIncrement onPress={increment}>
          <TitleButton>Incrementar</TitleButton>
        </ButtonIncrement>

        <ButtonDecrement onPress={decrement}>
          <TitleButton>Decrementar</TitleButton>
        </ButtonDecrement>

      </ContainerButtons>

    </Container>
  );
}
