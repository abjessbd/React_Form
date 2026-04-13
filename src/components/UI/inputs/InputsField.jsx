import styled from "styled-components";

const InputsField = styled.input`
    background: transparent;
    color: #212121;
    font-size: 0.90rem;
    padding: 0.50rem 0.75rem;
    outline: none;
    border: ${props => props.$error ? '2px solid red' : '1px solid skyblue'};
    border-radius: 0.25rem;
    user-select: none;
`;

export default InputsField;