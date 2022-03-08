import {
  Container,
  Active,
  Inactive,
  CarImage,
  ArrowNext,
  ArrowPrev,
} from "./styles";

import { useState } from "react";

import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { ICars } from "@interfaces/carsInterfaces";

type Props = {
  onChangeCar: (value: number) => void;
  cars: ICars[];
};

const Carousel = ({ onChangeCar, cars }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }: any) => {
    return (
      <ArrowNext onClick={onClick}>
        <BsArrowRight size={28} />
      </ArrowNext>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <ArrowPrev onClick={onClick}>
        <BsArrowLeft size={28} />
      </ArrowPrev>
    );
  };

  const changeCarHandler = (current: any, next: any) => {
    onChangeCar(next);
    setImageIndex(next);
  };

  const settings: any = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: cars.length === 3 ? "33%" : 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: changeCarHandler,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          centerPadding: 0,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {cars.map((car, idx) => (
          <div key={idx}>
            {idx === imageIndex && (
              <Active>
                <CarImage src={car.image} alt={car.id} />
              </Active>
            )}
            {idx !== imageIndex && (
              <Inactive>
                <CarImage src={car.image} alt={car.id} />
              </Inactive>
            )}
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
