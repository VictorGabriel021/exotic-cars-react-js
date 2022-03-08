import styled from "styled-components";

import { Colors } from "@constants/index";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const Active = styled.div`
  transform: scale(1);
  opacity: 1;
  margin: 0 auto;
  width: 50%;
  background: linear-gradient(52deg, #a1a9ec, #d8d7d7);
  border-radius: 10px;

  img {
    width: 280px;
    object-fit: contain;

    @media (max-width: 500px) {
      width: 120px;
      height: 100px;
    }
  }
`;

export const Inactive = styled.div`
  transform: scale(0.7);
  transition: transform 300ms;
  opacity: 0.8;
  height: 150px;
  display: flex;
  align-items: center;
  margin: 30px auto 0 auto;
  width: 60%;
  background-color: #d8d7d7;
  border-radius: 10px;
`;

export const CarImage = styled.img`
  width: 20rem;
  margin: 0 auto;
  height: 150px;

  @media (max-width: 500px) {
    width: 120px;
    height: 100px;
  }
`;

const Arrow = styled.div`
  background-color: ${Colors.primary};
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  height: 50px;
  width: 50px;
  text-align: center;
  padding: 10px;

  svg {
    color: white;
    transition: color 300ms;
  }

  &:hover {
    background-color: #59595e;
  }
`;

export const ArrowNext = styled(Arrow)`
  right: 0%;
  top: 50%;

  @media (max-width: 1419px) {
    top: 30%;
  }

  @media (max-width: 500px) {
    top: 15%;
  }
`;

export const ArrowPrev = styled(Arrow)`
  left: 0%;
  top: 50%;

  @media (max-width: 1419px) {
    top: 30%;
  }

  @media (max-width: 500px) {
    top: 15%;
  }
`;
