import styled from "styled-components";
import Login from "./Login";

const tamTablet = 768;

const Container = styled.div`
   @media screen and (min-width: ${tamTablet}px){
      flex-direction: row;
      font-size: large;
   }
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #264D70;
  
`;

const FormContainer = styled.div`
  padding: 40px;
  border-radius: 25 px;
  background-color: #fff;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 25px;
  border: solid 0.5px grey;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: none;
  background-color: #264D70;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #264D99;
  }
`;





export {Container, FormContainer, Input, Button, tamTablet}