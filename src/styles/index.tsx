import styled from "styled-components";
import Imagess from "../assets/Test.jpg";

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

export const MoviePoster = styled.div`
  height: 300px;
  width: 200px;
`;

export const MovieImage = styled.img.attrs<{ src: string; isLarge?: boolean }>({
  src: `${(props) => props.src || Imagess}`,
})`
  width: 100%;
  margin-right: 15px;
  object-fit: contain;
  max-height: ${(props) => (props.isLarge ? "15vw" : "25vw")};
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    z-index: 10;
  }
  @media (max-width: 768px) {
    max-height: ${(props) => (props.isLarge ? "30.5vw" : "20.5vw")};
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
  font-size: 1.5vw;
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
