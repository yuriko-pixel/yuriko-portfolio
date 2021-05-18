import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Nav from './components/nav'
import Timeline from './components/timeline'
import Blackjack from './components/blackjack'
import styled from "styled-components";
import {BackgroundColor} from './components/color'

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
background: ${BackgroundColor};
color: whitesmoke;
min-height: 100vh;
display: flex;
flex-direction: column;
`;

