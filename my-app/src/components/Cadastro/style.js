import styled from "styled-components";
import Cadastro from "./Cadastro";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #d4145a, #fbb03b);
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #d4145a;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  margin-bottom: 20px;
`;


export {Container, FormContainer, Label, Input, ErrorMessage, SubmitButton, Title}