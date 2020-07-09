
import React from "react"
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";
const Container = styled.div`
height: 100%;
width: 100%;
overflow: hidden;
`;

function App() {
  return (
    <Container>
      <NavBar/>
    </Container>
  );
}

export default App;
