import styled from "styled-components";
import Login from "./Login";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const FormContainer = styled.div`
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;





export {Container, FormContainer, Input, Button}