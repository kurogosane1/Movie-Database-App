import styled from "styled-components";
import Imagess from "../assets/Test.jpg";
import { Props, InputTextLayer } from "../types";
import NetFlixFront from "../assets/NetFlixFront.jpeg";

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(
    350deg,
    rgba(133, 151, 252, 1) 0%,
    rgba(0, 37, 255, 1) 45%
  );
  color: #ffffff;
  font-size: 1rem;
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
`;

export const UserIcon = styled.div`
  background: linear-gradient(
    350deg,
    rgba(133, 151, 252, 1) 0%,
    rgba(0, 37, 255, 1) 45%
  );
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const Rows = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: flex-start; */
  padding: 20px;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Columns = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-evenly;
  background-color: red;
  overflow-x: hidden;
  overflow-y: none;
  margin-left: 20px;
`;

export const Navbar = styled.div<{ show: Boolean }>`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  background-color: ${(props) => (props.show ? "#080707" : "transparent")};
  transition-timing-function: ease-in;
  transition: all 0.5s;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
  padding: 20px;
  /* margin-left: 20px;
  margin-right: 20px; */
  z-index: 1000;
`;

export const NavbarList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// Front Page Navbar
export const FrontNavbar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  background-color: transparent;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
  padding: 20px;
  z-index: 1000;
`;

export const MoviePoster = styled.div`
  height: 300px;
  width: 200px;
`;

export const MovieImage = styled.img.attrs<{ src: string; isLarge?: boolean }>({
  src: `${(props: Props) => props.src || Imagess}`,
})`
  width: 100%;
  margin-right: 15px;
  object-fit: contain;
  max-height: ${(props) => (props.isLarge ? "27vw" : "25vw")};
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    z-index: 10;
  }
  @media (max-width: 768px) {
    max-height: ${(props) => (props.isLarge ? "30.5vw" : "20.5vw")};
  }
  @media (min-width: 1298px) {
    max-height: ${(props) => (props.isLarge ? "15vw" : "15vw")};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h1`
  padding-left: 20px;
  margin-top: 20px;
  font-size: 1.4vw;
  margin-top: 10px;
  font-family: "Open Sans", sans-serif;
`;

export const Header = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-color: transparent;
  display: flex;
  width: 100%;
  align-items: center;
  background-size: cover;
  margin-top: -70px;
  height: 50vh;
  padding: 20px;

  @media (max-width: 768px) {
    height: 30vh;
  }
  @media (min-width: 1298px) {
    height: 60vh;
    background-position: center;

    object-fit: contain;
  }
`;
export const BannerContainer = styled.div`
  height: 40%;
  color: white;
  font-family: "Open Sans", sans-serif;

  & > h1 {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 4.5vw;
    background: transparent;
  }
  & > span {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 450px;
    background: transparent;
  }

  @media (min-width: 1298px) {
    & > h1 {
      font-size: 2.5vw;
    }
  }
`;
export const BannerOverview = styled.h3`
  width: 45rem;
  color: white;
  background-color: transparent;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1.3vw;
  max-width: 360px;
  height: 80px;
  font-family: "Open Sans", sans-serif;

  @media (min-width: 1298px) {
    font-size: 1vw;
    max-width: 20.5vw;
  }
`;

export const BannerButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  background: #090909b2;
  padding: 0.5rem 0 0.5rem 0;
  color: white;
  border-radius: 10px;
  border: none;
  margin-right: 2rem;
  outline: none;
  font-family: "Open Sans", sans-serif;
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const BrowserFoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-evenly;
  background-color: #080707;
  color: #808080;
  font-family: "Open Sans", sans-serif;
  line-height: 2;
  font-size: 1.1vw;
`;

export const FootRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const FootCol = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-evenly;
`;

// Front Page for Login Purpose
export const HomeContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${(props) => props.backgroundImage});
  background-color: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  font-family: "Open Sans", sans-serif;
  background-size: cover;
  object-fit: contain;
  height: 100vh;
`;

// Front Page for Login Container
export const LoginContainer = styled.div`
  background-color: #080707ce;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px;
  object-fit: contain;
  line-height: 2;
  /* justify-content: space-evenly; */
  height: 458px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  position: relative;
`;

export const InputTextContainer = styled.input.attrs<{ type: string }>({
  type: `${(props: InputTextLayer) => props.type}`,
})`
  background: white;
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
  border-radius: 5px;
  border: none;
  text-align: left;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  width: 320px;
  :focus {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
    margin: none;
  }
  :active {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
  }
`;

export const InputPasswordContainer = styled.input.attrs({
  type: "password",
})`
  background: white;
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
  border-radius: 5px;
  border: none;
  text-align: left;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  width: 320px;
  :focus {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
    margin: none;
  }
  :active {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
  }
`;

export const InputLabel = styled.label.attrs<{ labelled: string }>({
  value: `${(props: InputTextLayer) => props.labelled}`,
})`
  margin-bottom: "10px";
  position: "absolute";
  top: "22px";
  left: "42px";
  color: "black";
  font-size: "12px";
`;

export const InputSubmit = styled.button.attrs({ type: "submit" })`
  border-radius: 6px;
  width: 320px;
  padding: 20px;
  margin-top: 10px;
  outline: none;
  border: none;
  background-color: red;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
`;
