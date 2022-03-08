import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 20px;
`;

export const Message = styled.h1`
  color: white;
  background-color: #ef5350;
  padding: 40px 0;
  border-radius: 10px;
  text-align: center;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
