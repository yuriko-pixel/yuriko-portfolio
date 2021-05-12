import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'

function Nav() {
  return (
    <NavigationBar>
        <LinkStyled  to="/">Home</LinkStyled>
        {/* <LinkStyled  to="/timeline">Experience</LinkStyled> */}
        {/* <LinkStyled  to="/tech">Technical Skills</LinkStyled> */}
        <AStyled  href = 'https://github.com/ottotsuma' target = "_blank">GitHub</AStyled>
        {/* <LinkStyled  to="/Blackjack">Blackjack</LinkStyled> */}
      <LinkStyled  to="/Monad/1">Monad</LinkStyled>
    </NavigationBar>
  );
}

export default Nav;

const AStyled = styled.a`
color: white;
&:hover {
    color: orange;
}
`;

const LinkStyled = styled(Link)`
color: white;
&:hover {
    color: orange;
}
`;

const NavigationBar = styled.div`
min-height: 4vh;
max-height: 4vh;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 1vh;
background: #0d89eb;
z-index: 1;
`