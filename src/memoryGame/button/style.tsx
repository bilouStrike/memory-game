import styled from "styled-components";
type ButtonT = {
    color?: string,
    children: React.ReactNode,
    onClick: () => void
}

const StyledButton = styled.button<ButtonT>`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: ${props => props.color === 'primary' ?  '#fda215' : '#dfe6ec'};
    color: ${props => props.color === 'primary' ?  '#ffffff' : '##2f4150'};
    cursor: pointer;
    transition: border-color 0.25s;
    margin: 8px;
`;
export default StyledButton