import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Nav from './components/nav'
import Timeline from './components/timeline'
import Blackjack from './components/blackjack'
import styled from "styled-components";


function App() {
  return (
    <>
    <Main>
            <BrowserRouter>
                <Nav />
                <Route path="/" component={Home} exact />
                <Route path="/timeline" component={Timeline} />
                <Route path="/blackjack" component={Blackjack} />
            </BrowserRouter>
    </Main>
    </>
  );
}

export default App;

const Main =  styled.div`
text-align: center;
background: linear-gradient(
  0deg,
  rgba(34, 89, 195, 0.7) 9%,
  rgba(45, 253, 209, 0.3) 100%
);
color: whitesmoke;
min-height: 100vh;
display: flex;
flex-direction: column;
`;

