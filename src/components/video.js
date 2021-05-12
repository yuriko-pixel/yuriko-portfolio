
import sheep1 from "./../assets/sheep1.gif";
import sheep2 from "./../assets/sheep2.gif";
import sheep3 from "./../assets/sheep3.gif";
import sheep4 from "./../assets/sheep4.gif";
import sheep6 from "./../assets/sheep6.gif";
import sheep7 from "./../assets/sheep7.gif";
import sheep8 from "./../assets/sheep8.gif";
import sheep9 from "./../assets/sheep9.gif";
import sheep10 from "./../assets/sheep10.gif";
import styled from "styled-components";
import birthday from "./../assets/sheep5.gif";
import React from "react";

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Video() {
  let array = [sheep1, sheep2, sheep3, sheep4, sheep6, sheep7, sheep8, sheep9, sheep10];
  let number = getRandomArbitrary(0, array.length - 1);
  let sheep = array[number];
  if (
    new Date().toDateString().split(" ")[1] === "Jun" &&
    new Date().toDateString().split(" ")[2] === "20"
  ) {
    return (
      <div className="App">
        <Sheep src={birthday} alt="Birthday" type="gif" />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Sheep src={sheep} alt="Sheep" type="gif" />
      </div>
    );
  }
}
export default Video;

const Sheep = styled.img`
position: absolute;
width: 100px;
height: 100px;
z-index: 1;
left: 20%;
top: 80%;

@media screen and (max-width: 730px) {
  top: 0%;
  left: 80%;
}
`;

