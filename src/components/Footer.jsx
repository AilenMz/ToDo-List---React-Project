import React from "react";
import styled from "styled-components";
import allColors from "../styles/colors";
import img from "../img/henry.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0vh;
  background-color: ${allColors.colors[1]};
  width: 100%;
  color: #222;
  padding-top: 20px;
  padding-bottom: 17px;
  margin-top: 15px;
  border-bottom: 1px solid ${allColors.colors[1]};
`;

const PrincipalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SecondaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  @media all and (max-width: 768px) {
    align-items: center;
  }

  .h3 {
    background-image: linear-gradient(30deg, magenta, #475bc5);
    -ms-background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;
    -ms-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .social {
    flex-direction: row;
    text-align: center;
    padding-bottom: 15px;

    .Link {
      font-size: 2rem;
      text-decoration: none;
      color: #475bc5;
      padding-left: 10px;
      padding-right: 10px;

      :hover {
        color: white;
      }
    }
  }
`;
const Img = styled.img`
  max-width: 180px;
  height: auto;
  @media all and (max-width: 768px) {
    max-width: 80px;
    height: auto;
  }
`;
const CopyRight = styled.div`
  font-size: 0.8rem;
  text-align: center;
  opacity: 0.6;
`;

const Footer = () => (
  <FooterContainer>
    <PrincipalDiv>
      <SecondaryDiv>
        <Img src={img} alt="" />
        <h3 className="h3">To Do List Project</h3>
      </SecondaryDiv>

      <SecondaryDiv>
        <h4>Join Our Social Community</h4>
        <div className="social">
          <a href="https://www.linkedin.com/in/ailen-mart%C3%ADnez/" target="_black" className="Link">
            <BsLinkedin />
          </a>
          <a href="https://github.com/AilenMz" target="_black" className="Link">
            <BsGithub />
          </a>
        </div>
      </SecondaryDiv>
    </PrincipalDiv>
    <CopyRight>
      <span>© 2021 Designed by Ailen Martinez</span>
    </CopyRight>
  </FooterContainer>
);

export default Footer;
