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
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  overflow-x: hidden;
  padding: 20px;
`;

export const Columns = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-evenly;
  background-color: red;
  overflow-x: hidden;
  margin-left: 20px;
`;

export const Navbar = styled.div`
  display: flex;
  background-color: green;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  box-sizing: border-box;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
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

export const MovieImage = styled.img.attrs<{ where: string }>({
  src: `${(props) => props.where || Imagess}`,
})`
  height: 300px;
  width: 200px;
`;
