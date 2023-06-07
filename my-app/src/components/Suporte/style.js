import React from 'react';
import styled from "styled-components";
const Container = styled.div`
   @media screen and (max-width:768px){
      flex-direction: row;
      font-size: large;
   }
   height: 150vh;
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

  
  ;
`;

export  {Container,FormContainer};