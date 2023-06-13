import styled from "styled-components";
import Cadastro from "./Cadastro";

const ResponsiveComponent = styled.div`

display: grid;
columns: unset;
`;



const Container = styled.div`
   @media screen and (min-width: 768px){
      flex-direction: column;
      font-size: large;
   }
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #264D70;
   
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 25px;
  border: solid 0.5px grey;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
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
    background-color: blue;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  margin-bottom: 20px;
`;

const Drop = styled.select`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 25px;
  border: solid 0.5px grey;
`;

export {Container, FormContainer, Input, ErrorMessage, Button, Title,Drop,ResponsiveComponent}

