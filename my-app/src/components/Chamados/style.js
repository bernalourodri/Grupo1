import styled from "styled-components";
import Login from "./Chamados";

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
  align-items: left;
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
  font-size: 22px;

  &:hover {
    background-color: blue;
  }
`;

const Descr = styled.input`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 25px;
  border: solid 0.5px grey;
`;


export {Container, FormContainer, Input, Button, tamTablet, Descr}