import styled from "styled-components";

export const Button = styled.button`
height: 50px;
width: 100px;
border: none;
border-radius: 5px;
`;

export const Primary = styled(Button)`
background-color: green;
`

export const Secondary = styled(Button)`
border: 2px solid red;
`