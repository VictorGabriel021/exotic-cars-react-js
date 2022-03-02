import {
  CatalogCard,
  CarInfoAlign,
  CarPriceAlign,
  CarBrandText,
  CarModelText,
  CarDollar,
  CarPrice,
  CarPricePerDay,
} from "./styles";

import { HiDotsHorizontal } from "react-icons/hi";

const CatalogItem = () => {
  return (
    <CatalogCard>
      <CarInfoAlign>
        <div>
          <CarBrandText>Ferrari</CarBrandText>
          <CarModelText>California</CarModelText>
        </div>
        <HiDotsHorizontal color="#C8C8CA" size={24} />
      </CarInfoAlign>
      <img
        src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:699a6983-35c7-4662-bc81-5c626742102d;revision=0?component_id=a306573a-1bce-448f-a6a6-923b1affe4cf&api_key=CometServer1&access_token=1646263521_urn%3Aaaid%3Asc%3AUS%3A699a6983-35c7-4662-bc81-5c626742102d%3Bpublic_8b87789e2099f748008b167b817cbf7199c4b9fb"
        alt="car"
      />
      <CarPriceAlign>
        <CarDollar>$</CarDollar>
        <CarPrice>725</CarPrice>
        <CarPricePerDay>/day</CarPricePerDay>
      </CarPriceAlign>
    </CatalogCard>
  );
};

export default CatalogItem;
