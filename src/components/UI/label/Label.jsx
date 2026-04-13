import styled from "styled-components";

const fontSize = {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem'
};

const Label = styled.label`
    font-size: ${props => fontSize[props.size] ?? fontSize.md};
    letter-spacing: .07rem;
`;

export default Label;