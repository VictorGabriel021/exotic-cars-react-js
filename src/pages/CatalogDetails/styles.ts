import styled from "styled-components";

import { Colors } from "@constants/index";

export const Container = styled.div`
  background: linear-gradient(125deg, #fff, #d8d7d7);

  @media (min-height: 1220px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  padding: 50px 90px;
  @media (max-width: 1200px) {
    padding: 50px 20px;
  }
`;

export const CarInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CarInfoContent = styled.div`
  margin-left: 40px;

  @media (max-width: 1200px) {
    margin-left: 15px;
  }
`;

export const CarLogo = styled.img`
  width: 100px;

  @media (max-width: 1200px) {
    width: 70px;
  }
`;

export const TextBold = styled.h1`
  color: ${Colors.primary};
  font-size: 50px;
  font-weight: bold;

  @media (max-width: 1200px) {
    font-size: 32px;
  }
`;

export const CarInfoPrice = styled.p`
  color: ${Colors.primary};
  font-size: 40px;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const CarImageContainer = styled(CarInfoContainer)`
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    padding: 40px 0;
  }
`;

export const AlignCarNumber = styled.div`
  align-self: baseline;
  text-align: center;

  @media (max-width: 1200px) {
    align-self: center;
  }
`;

export const CarColorText = styled(CarInfoPrice)`
  font-size: 30px;

  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const CarBookContainer = styled(CarInfoContainer)`
  justify-content: center;
  margin-top: 40px;
`;

export const CarImg = styled.img`
  width: 75%;
  height: 500px;
  object-fit: contain;

  @media (max-width: 1200px) {
    height: auto;
  }
`;
