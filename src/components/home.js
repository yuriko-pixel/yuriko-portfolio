// Import statements
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cog from "./../assets/cog.png";
import Munchify from "./../assets/512x512.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Video from "./video";
import styled, { keyframes } from "styled-components";

import Modal from "./elements/modal";
import Tech from "./tech";

import Modal2 from "./elements/modal2";
import Timeline from "./timeline";
import Spin from "./spinn";

const Language = {
  ja: {
    name: "ダラー・ショーン",
    projects: "プロジェクト",
    experience: "経験",
    tech: "技術的なスキル",
    blackjack: "ブラックジャック",
    hi: "こんにちは！",
    lang: "English",
    MunchifyDisc: "機械学習があなたにぴったりのレストランを予測！",
    MunchifyTech: "React-Native, NodeJS, MongoDB",
    MunchifyTitle: "Munchify!",
    SecretDisc: "あなたの秘密のためのセーフティボックスです。",
    SecretTech: "React, NodeJS, MongoDB",
    SecretTitle: "秘密の箱",
    RecipesDisc: "空腹感を解消しよう！",
    RecipesTech: "React, PWA, Netlify",
    RecipesTitle: "夫のレシピ",
  },
  en: {
    name: "Shaun Darragh",
    projects: "Projects",
    experience: "Experience",
    tech: "Technical Skills",
    blackjack: "BlackJack",
    hi: "Hi!",
    lang: "日本語",
    MunchifyDisc: "Machine learning predicts your perfect restaurant!",
    MunchifyTech: "React-Native, NodeJS, MongoDB",
    MunchifyTitle: "Munchify!",
    SecretDisc: "A safety box for your secrets!",
    SecretTech: "React, NodeJS, MongoDB",
    SecretTitle: "The Secret Box",
    RecipesDisc: "Sort out your hunger!",
    RecipesTech: "React, PWA, Netlify",
    RecipesTitle: "Otto's Recipes",
  },
};

// Main function
function Home(props) {
  // Change window function
  console.log(props);
  function change(props) {
    const win = window.open(props, "_blank");
    win.focus();
  }
  const [lang, setLang] = useState("en");
  function updateLang() {
    if (lang === "en") {
      setLang("ja");
    } else {
      setLang("en");
    }
  }
  const [show, setShow] = useState(false);
  function updateShow() {
    setShow(!show);
  }
  return (
    <GlassWrapper>
      {show && (
        <Modal2 title={"Experience"} insert={<Spin />} close={updateShow} />
      )}
      <Glass>
        <Profile>
          <NameWrap>
            <Video />
            <HiWrapper>
              <ProfileImage
                src="https://avatars0.githubusercontent.com/u/51743227?s=460&u=60cf882cb319128a05fa5fff10c006de9cdfc2af&v=4"
                alt="Profile"
              />
              <Hi>{Language[lang].hi}</Hi>
            </HiWrapper>
            <h3>{Language[lang].name}</h3>
            {/* <h4>ダラー・ショーン</h4> */}
            <StyledButton onClick={() => updateLang()}>
              {Language[lang].lang}
            </StyledButton>
          </NameWrap>
          <List>
            <Linkey>
              <LinkImage
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
                alt=" "
              />
              <AStyled href="https://github.com/ottotsuma" target="_blank">
                GitHub
              </AStyled>
            </Linkey>
            <Linkey>
              <LinkImage
                src="https://www.pngfind.com/pngs/m/594-5947621_computer-icons-project-project-plan-black-text-project.png"
                alt=" "
              />
              <Link2 onClick={() => updateShow()}>
                {Language[lang].projects}
              </Link2>
            </Linkey>
            <Linkey>
              <LinkImage
                src="https://www.pinclipart.com/picdir/middle/75-750874_work-experience-svg-png-icon-free-download-356662.png"
                alt=" "
              />
              {/* Fake item needs styles! Or change to be like anchor 2 */}
              <LinkStyled to={"/timeline"}>
                {Language[lang].experience}
              </LinkStyled>
            </Linkey>
            <Linkey>
              <LinkImage src={Cog} alt=" " />
              <Link2
                onClick={() =>
                  Modal({
                    insert: Tech(),
                    cancel: "Close",
                    title: "Tech",
                  })
                }
              >
                {Language[lang].tech}
              </Link2>
            </Linkey>
          </List>
          <Anchor2 to="/Blackjack">
            <p to="/Blackjack" style={{ color: "white" }}>
              {Language[lang].blackjack}
            </p>
          </Anchor2>
        </Profile>
        <Right>
          <Box
            onClick={() =>
              change("https://github.com/Spring-CC/restaurant-native-app")
            }
          >
            <HomeImage src={Munchify} alt="Technical Skills" />
            <InnerBox>
              <h3>{Language[lang].MunchifyTitle}</h3>
              <Para>{Language[lang].MunchifyDisc}</Para>
            </InnerBox>
            <Para>{Language[lang].MunchifyTech}</Para>
          </Box>
          <Box onClick={() => change("https://github.com/ottotsuma/SoloMVP")}>
            <HomeImage src={Secret} alt="Technical Skills" />
            <InnerBox>
              <h3>{Language[lang].SecretTitle}</h3>
              <Para>{Language[lang].SecretDisc}</Para>
            </InnerBox>
            <Para>{Language[lang].SecretTech}</Para>
          </Box>
          <Box
            onClick={() => change("https://github.com/ottotsuma/React-App2")}
          >
            <HomeImage src={Food} alt="Technical Skills" />
            <InnerBox>
              <h3>{Language[lang].RecipesTitle}</h3>
              <Para>{Language[lang].RecipesDisc}</Para>
            </InnerBox>
            <Para>{Language[lang].RecipesTech}</Para>
          </Box>
        </Right>
      </Glass>
      <Circle1 />
      <Circle2 />
    </GlassWrapper>
  );
}
export default Home;

const NameWrap = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.div`
border-style: solid;
border-width: 1.5px;
border-color: black;

margin-top: 10px;
color: white;
background: #0d89eb;
display: flex;
justify-content: center;
align-items: center;
width: 53%;
cursor: pointer;
white-space: nowrap;
&:hover {
    background: #2CA8FF;
}
@media screen and (max-width: 650px) {
  padding 0 10px;
}
`;

const Hi = styled.div`
  position: absolute; /* important */
  bottom: 0; /* important */
  max-height: 0; /* important */
  overflow: hidden; /* important */
  transition: max-height 300ms ease-in; /* important */
  border-radius: 50%;
  overflow: hidden;
  padding: 5px;
  opacity: 0;
  color: white;
`;

const HiWrapper = styled.div`
  &:hover ${Hi} {
    max-height: 50%; /* important */
    bottom: 90%;
    opacity: 1;
    background: #0d89eb;
  }
`;

// https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router
const Link2 = styled.div`
  // fake link!
  color: black;
  // background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #2ca8ff;
  }
  text-decoration: underline;
`;

const AStyled = styled.a`
  color: black;
  // background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #2ca8ff;
  }
`;

const LinkStyled = styled(Link)`
  color: black;
  // background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #2ca8ff;
  }
`;

const Anchor2 = styled(Link)`
// Link that looks like a button!

border-style: solid;
border-width: 1.5px;
border-color: black;


color: white;
background: #0d89eb;
display: flex;
justify-content: center;
align-items: center;
width: 53%;
height: 10%;
cursor: pointer;
white-space: nowrap;
&:hover {
    background: #2CA8FF;
}
  padding 0 10px;
`;

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;

const Para = styled.p`
  padding: 1px;
  @media screen and (max-width: 880px) {
    display: none;
  }
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled.div`
  /* border-style: solid; */
  cursor: pointer;
  color: black;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.6)
  );
  width: 85%;
  height: 25%;
  border-radius: 1rem;
  box-shadow: 6px 3px 3px rgb(58, 58, 58, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  &:active {
    box-shadow: 3px 1px 1px rgb(58, 58, 58, 0.1);
  }
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.9)
    );
  }
`;

const Linkey = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 40%;
  white-space: nowrap;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 2;
  @media screen and (max-width: 426px) {
    display: none;
  }
`;

const Profile = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  flex: 1;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const GlassWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Glass = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3)
  );
  min-height: 80vh;
  width: 60%;
  display: flex;
  border-radius: 2rem;
  z-index: 3;
  backdrop-filter: blur(2rem);
`;

const Circle1 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 0, 221, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  z-index: 2;
  // pos
  top: 10%;
  right: 15%;
  // animation-name: ${breatheAnimation};
  // animation-duration: 8s;
  // animation-iteration-count: infinite;
`;

const Circle2 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 0, 221, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  z-index: 2;
  // pos
  bottom: 5%;
  left: 15%;
`;

const LinkImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 1rem;
  margin-right: 1rem;
  @media screen and (max-width: 880px) {
    display: none;
  }
`;

const HomeImage = styled.img`
  width: 20%;
  height: 70%;
  border-radius: 1rem;
  padding: 2px;
  margin: 1rem;
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
