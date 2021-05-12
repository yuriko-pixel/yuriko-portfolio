import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Munchify from "./../assets/512x512.png";
import Joker from "./../assets/logo.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Monster from "./../assets/monster.jpg";
import Blog from "./../assets/blog.png";
import Bug from "./../assets/bug.jpg";
import Dob from "./../assets/dob.png";
import Todo from "./../assets/todo.jpg";
import Weather from "./../assets/weather.png";
import styled from 'styled-components';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <Wrapper css={`padding: 0 ${chevronWidth}px`}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <CardBackground
          className="Project-Card"
          
        >
          <h4>Munchify</h4>
          <img className="Screen-Shot" src={Munchify} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://play.google.com/store/apps/details?id=com.ottotsuma.restaurantnativeapp"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>The Secret Box</h4>
          <img className="Screen-Shot" src={Secret} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://secretbox.netlify.app/"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>Recipes</h4>
          <img className="Screen-Shot" src={Food} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://ottotsumarecipes.netlify.app/"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>Monster Search</h4>
          <img className="Screen-Shot" src={Monster} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://monsterpwa.web.app/"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>Joker</h4>
          <img className="Screen-Shot" src={Joker} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://cc13-rakutenapi-staging.herokuapp.com/home"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>DOB-Finder (PWA)</h4>
          <img className="Screen-Shot" src={Dob} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://ottotsuma.github.io/DOB-finder/html2.html"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>Weather</h4>
          <img className="Screen-Shot" src={Weather} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://ottotsuma.github.io/Weather/weather.html"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>Bug Tracker</h4>
          <img className="Screen-Shot" src={Bug} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://ottotsuma.github.io/BugTracker/BugTracker.html"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>To Do</h4>
          <img className="Screen-Shot" src={Todo} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://ottotsuma.github.io/todo.html"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>Blog</h4>
          <img className="Screen-Shot" src={Blog} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://ottotsuma.github.io/Home.html"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
        <CardBackground
          className="Project-Card"
          
        >
          <h4>Game Calc</h4>
          <img className="Screen-Shot" src={Blog} alt="Screen-Shot" />
          <p>
            Click{" "}
            <a
              style={{ color: "white" }}
              href="https://ottotsuma.github.io/calchtml.html"
              target="_blank"
            >
              here
            </a>{" "}
            to be taken to the app.
          </p>
        </CardBackground>
      </ItemsCarousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
 ${props => props.css || ''};
 width: 100%;
overflow: auto;
* {
  max-height: 100%;
}
`;

const CardBackground = styled.div`
height: 300px;
background: #602080;
${props => props.css || ''};
`;