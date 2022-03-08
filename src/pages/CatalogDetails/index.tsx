import {
  Container,
  Content,
  CarLogo,
  CarInfoContainer,
  CarInfoContent,
  TextBold,
  CarInfoPrice,
  CarImageContainer,
  AlignCarNumber,
  CarColorText,
  CarBookContainer,
  CarImg,
} from "./styles";

import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import cars from "@data/cars.json";

import { Error, Carousel } from "@components/index";

import {
  ICarsResponse,
  ICars,
  defaultValuesICarsResponse,
  defaultValuesICars,
} from "@interfaces/carsInterfaces";

type ParamsType = {
  catalogId: string;
};

const CatalogDetails = () => {
  const { catalogId } = useParams<ParamsType>();

  const [carInfo, setCarInfo] = useState<ICarsResponse>(
    defaultValuesICarsResponse
  );
  const [carSelected, setCarSelected] = useState<ICars>(defaultValuesICars);
  const [isError, setIsError] = useState(false);

  const changeCarHandler = (value: number) => {
    const newCar = carInfo.cars.find((item, index) => index === value);
    setCarSelected(newCar as ICars);
  };

  useEffect(() => {
    const response = cars.find((car) => car.id === catalogId);
    if (response) {
      setCarInfo(response);
      setCarSelected(response.cars[0]);
    } else {
      setIsError(true);
    }
  }, [catalogId]);

  if (isError) {
    return <Error message="Erro ao carregar as informações do veículo :(" />;
  }

  const { brand, brandLogo, model, price, cars: carsList } = carInfo;

  return (
    <Container>
      <Content>
        <CarInfoContainer>
          <CarLogo src={brandLogo} alt="logo" />
          <CarInfoContent>
            <TextBold>
              {brand} {model}
            </TextBold>
            <CarInfoPrice>${price}/day</CarInfoPrice>
          </CarInfoContent>
        </CarInfoContainer>
        <CarImageContainer>
          <Link to="/">
            <Button variant="dark-outline">
              <BsArrowLeft size={28} style={{ marginRight: 10 }} />
              Back to catalog
            </Button>
          </Link>
          <CarImg src={carSelected.image} alt="car" />
          <AlignCarNumber>
            <TextBold>{carSelected.id}</TextBold>
            <CarColorText>{carSelected.color}</CarColorText>
          </AlignCarNumber>
        </CarImageContainer>
        <CarBookContainer>
          <Button variant="dark">
            Book now
            <BsArrowRight size={28} style={{ marginLeft: 10 }} />
          </Button>
        </CarBookContainer>
        <Carousel onChangeCar={changeCarHandler} cars={carsList} />
      </Content>
    </Container>
  );
};

export default CatalogDetails;
