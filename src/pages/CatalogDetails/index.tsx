import { useParams } from "react-router-dom";

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

import Button from "react-bootstrap/Button";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import cars from "@data/cars.json";

import Error from "@components/Error";
import Carousel from "@components/Carousel";
import { ICarsResponse, ICars } from "@interfaces/carsInterfaces";
import { useState } from "react";

type ParamsType = {
  catalogId: string;
};

const CatalogDetails = () => {
  const { catalogId } = useParams<ParamsType>();
  const carInfo = cars.find((car) => car.id === catalogId);
  let { brand, model, price, cars: carsList } = carInfo as ICarsResponse;

  const [carSelected, setCarSelected] = useState(carsList[0]);

  const changeCarHandler = (value: number) => {
    const newCar = carsList.find((item, index) => index === value);
    setCarSelected(newCar as ICars);
  };

  if (!carInfo) {
    return <Error message="Erro ao carregar as informações do veículo :(" />;
  }

  return (
    <Container>
      <Content>
        <CarInfoContainer>
          <CarLogo
            src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:699a6983-35c7-4662-bc81-5c626742102d;revision=0?component_id=2e6ec02b-e1ee-407c-9d5e-f6c7c71ae782&api_key=CometServer1&access_token=1646438281_urn%3Aaaid%3Asc%3AUS%3A699a6983-35c7-4662-bc81-5c626742102d%3Bpublic_dd81f73f9979253b6fa532ca8f1623489ed35de3"
            alt="logo"
          />
          <CarInfoContent>
            <TextBold>
              {brand} {model}
            </TextBold>
            <CarInfoPrice>${price}/day</CarInfoPrice>
          </CarInfoContent>
        </CarInfoContainer>
        <CarImageContainer>
          <Button variant="dark-outline">
            <BsArrowLeft size={28} style={{ marginRight: 10 }} />
            Back to catalog
          </Button>
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
