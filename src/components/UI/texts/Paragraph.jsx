import styled from "styled-components";

const fontSize = {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem'
};

const Paragraph = styled.p`
    line-height: 1.75rem;
    font-size: ${props => fontSize[props.size] ?? fontSize.md};
`;

export default Paragraph;