import styled from "styled-components";

import { Colors } from "@constants/index";

export const CatalogContainer = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 1500px) {
    padding: 25px 0;
  }
`;

export const ScrollTopContainer = styled.div`
  position: fixed;
  right: 0;
  top: 50vh;

  @media (min-width: 1500px) {
    top: unset;
  }
`;

export const ScrollTopContent = styled.div`
  svg {
    cursor: pointer;

    &:hover {
      circle {
        fill: ${Colors.secundary};
      }
    }

    @media (max-width: 500px) {
      height: 80px;
      width: 80px;
    }
  }
`;
