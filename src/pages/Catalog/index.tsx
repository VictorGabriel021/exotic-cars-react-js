import { useEffect, useState } from "react";

import {
  CatalogContainer,
  ScrollTopContainer,
  ScrollTopContent,
} from "./styles";

import { ReactComponent as ScrollTopImg } from "@assets/images/scrollTop.svg";

import cars from "@data/cars.json";

import { ICarsResponse } from "@interfaces/carsInterfaces";

import { CatalogItem, Error, Loading } from "@components/index";

const Catalog = () => {
  const [carItem, setCarItem] = useState<ICarsResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCarItem(cars);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!carItem) {
    return <Error message="Erro ao carregar os itens do catálogo :(" />;
  }

  if (carItem.length === 0) {
    return <Error message="O catálogo está indisponível :(" />;
  }

  return (
    <CatalogContainer>
      {carItem.map((car) => (
        <CatalogItem key={car.id} car={car} />
      ))}
      <ScrollTopContainer>
        <ScrollTopContent>
          <ScrollTopImg onClick={() => window.scrollTo(0, 0)} />
        </ScrollTopContent>
      </ScrollTopContainer>
    </CatalogContainer>
  );
};

export default Catalog;
