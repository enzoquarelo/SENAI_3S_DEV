import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 120px;
    height: 44px;

    align-items: center;
    justify-content: center;
`

export const ButtonIncrement = styled(Button)`
    background-color: rgb(34, 78, 128);
    border-radius: 5px;
`
export const ButtonDecrement = styled(Button)`
    background-color: rgb(128, 7, 2);
    border-radius: 5px;
`