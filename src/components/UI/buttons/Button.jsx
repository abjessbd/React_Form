import styled from "styled-components";

const Button = styled.button`
width: 100%;
background: skyblue;
color: #223c46;
border: none;
padding: .50rem .75rem;
border-radius: 5px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: .15rem;
cursor: pointer;
&:hover{
    background: #03b2f7;
    transition: all 0.3s;
}
`;

export default Button;