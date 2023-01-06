import styled from "styled-components";
import {useState} from 'react';
import Sidebar from "./components/Sidebar";
import {Button, Primary, Secondary} from "./components/Button";


function App() {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Sidebar show={show}/>
      <Title color="red">App</Title>
      <Title color="blue">Subtitle</Title>
      <Title show={show}>Third Title</Title>
      <StyledButton onClick={() => setShow(!show)}>Click Me</StyledButton>
      <p id="first">Paragraph of text</p>
      <p className="second">Second paragraph</p>
      <br></br>
      <Button>Default</Button>
      <Primary>Primary</Primary>
      <Secondary>Secondary</Secondary>
    </Container>
  );
}

export default App;


const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: lightblue;

h2 {
  color : yellow;
}

#first {
  font-size: 2em;
}

.second {
  font-size : 1.5em;
  color: navy;
}
`;

const Title = styled.h1`
margin : 0;
color : ${({show}) => show ? "red" : "blue"};
`;

const StyledButton = styled.button`
border: none;
height: 50px;
width: 100px;
border-radius: 5px;
background-color: black;
color: white;
cursor: pointer;
`