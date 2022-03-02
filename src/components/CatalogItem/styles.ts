import styled from "styled-components";

export const CatalogCard = styled.div`
  background-color: #f8f8fa;
  border-radius: 20px;
  padding: 20px;
  margin: 12px 8px;
  max-width: 250px;
  cursor: pointer;
  transition: transform 1s;

  &:hover {
    transform: scale(1.1);
    background-color: #f0f5fd;
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
  color: #313136;
`;

export const CarBrandText = styled(CarModelText)`
  text-transform: none;
  font-weight: bold;
`;

export const CarPriceAlign = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CarPriceText = styled.p`
  color: #313136;
  font-size: 14px;
  font-weight: bold;
`;

export const CarDollar = styled(CarPriceText)`
  margin-top: 2px;
`;

export const CarPrice = styled(CarPriceText)`
  font-size: 24px;
`;

export const CarPricePerDay = styled(CarPriceText)`
  margin-bottom: 5px;
  font-weight: 400;
`;
