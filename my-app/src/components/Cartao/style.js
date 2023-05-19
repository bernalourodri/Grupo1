import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

export {CardContainer, CardImage, CardTitle, CardDescription}