import {
  CatalogCard,
  CarInfoAlign,
  CarPriceAlign,
  CarBrandText,
  CarModelText,
  CarDollar,
  CarPrice,
  CarPricePerDay,
  CarPriceBookText,
  HiDotsHorizontalColor,
  CarImage,
} from "./styles";

import { HiDotsHorizontal } from "react-icons/hi";

import { ICarsResponse } from "@interfaces/carsInterfaces";

import { useNavigate } from "react-router-dom";

type Props = {
  car: ICarsResponse;
};

const CatalogItem = ({ car }: Props) => {
  const { id, brand, model, price, imageShowcase } = car;

  const navigation = useNavigate();

  const navigateToDetailsHandler = (id: string) => {
    navigation(id);
  };

  return (
    <CatalogCard onClick={navigateToDetailsHandler.bind(null, id)}>
      <CarInfoAlign>
        <div>
          <CarBrandText>{brand}</CarBrandText>
          <CarModelText>{model}</CarModelText>
        </div>
        <HiDotsHorizontalColor>
          <HiDotsHorizontal size={24} />
        </HiDotsHorizontalColor>
      </CarInfoAlign>
      <CarImage src='assets/images/ferrari_californiaShowCase.png' alt={`Car:${id}`} />
      <CarPriceAlign>
        <CarPriceBookText>Book now</CarPriceBookText>
        <CarPriceAlign>
          <CarDollar>$</CarDollar>
          <CarPrice>{price}</CarPrice>
          <CarPricePerDay>/day</CarPricePerDay>
        </CarPriceAlign>
      </CarPriceAlign>
    </CatalogCard>
  );
};

export default CatalogItem;
