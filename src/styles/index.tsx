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

export const Navbar = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  box-sizing: border-box;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  z-index: 10;
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
  max-height: ${(props) => (props.isLarge ? "300px" : "400px")};
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    z-index: 10;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h1`
  padding-left: 20px;
  font-weight: 400;
  margin-top: 10px;
`;

export const Header = styled.div<{ backgroundImage: string }>`
  background-image: ${(props) =>
    props.backgroundImage ? props.backgroundImage : ""};
  display: flex;
  width: 100%;
  align-items: center;
  background-size: cover;
  background-color: green;
  margin-top: -50px;
  z-index: -1;
  height: 50vh;
  padding: 20px;
`;
