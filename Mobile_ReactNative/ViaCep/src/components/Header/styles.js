import styled from "styled-components/native";

export const ContainerHeader = styled.View`
    width: 100%;
    height: 201px;

    background-color: #FECC2B;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    align-items: center;
    justify-content: center;

    box-shadow:0px 0px 10px red;
`;

export const Title = styled.Text`
    font-family: ${(props) => props.fontFamily || "defaultFont"};
    font-size: ${(props) => props.fontSize || "16px"};
    color: #333E33;
`;