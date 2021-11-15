import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";

const Button = styled.button`
  background: green;
  color: white;
`;

const Container = styled.div`
  background: red;
  color: white;
  font-size: 2rem;
  .hero {
    font-size: 3rem;
  }
`;
function App() {
  return (
    <Container>
      <div>
        <h4>comfy sloth starter</h4>
        <Button>click me</Button>
      </div>
      <div className='hero'>hero text</div>
    </Container>
  );
}

export default App;
