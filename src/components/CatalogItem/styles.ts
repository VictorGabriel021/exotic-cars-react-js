import styled from "styled-components";

import { Colors } from "@constants/index";

export const HiDotsHorizontalColor = styled.div`
  color: #c8c8ca;
`;

export const CarPriceBookText = styled.p`
  color: transparent;
`;

export const CatalogCard = styled.div`
  background-color: #f8f8fa;
  border-radius: 20px;
  padding: 20px;
  margin: 12px 8px;
  width: 250px;
  height: 100%;
  cursor: pointer;
  transition: transform 1s;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(52deg, #a1a7f4, #e6d3f1);

    ${CarPriceBookText} {
      color: white;
    }

    ${HiDotsHorizontalColor} {
      color: ${Colors.primary};
    }
  }
`;

export const CarInfoAlign = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CarModelText = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  line-height: 6px;
  color: ${Colors.primary};
`;

export const CarBrandText = styled(CarModelText)`
  text-transform: none;
  font-weight: bold;
  line-height: 40px;
`;

export const CarImage = styled.img`
  margin-top: 15px;
  height: 80px;
  width: 100%;
  object-fit: scale-down;
`;

export const CarPriceAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CarPriceText = styled.p`
  color: ${Colors.primary};
  font-size: 14px;
  font-weight: bold;
`;

export const CarDollar = styled(CarPriceText)`
  margin-bottom: 12px;
`;

export const CarPrice = styled(CarPriceText)`
  font-size: 24px;
`;

export const CarPricePerDay = styled(CarPriceText)`
  margin-top: 12px;
  font-weight: 400;
`;
