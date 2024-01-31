import styled from "styled-components/native";

export const Title = styled.Text`
    font-family: ${(props) => props.fontFamily || "defaultFont"};
    font-size: ${(props) => props.fontSize || "16px"};
    color: #333E33;
`;