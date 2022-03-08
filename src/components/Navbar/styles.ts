import styled from "styled-components";

import { Colors } from "@constants/index";

export const NavContainer = styled.div`
  height: 100px;
  box-shadow: 0px 8px 25px #00000014;
`;

export const NavContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`;

export const NavLogoText = styled.p`
  margin-top: 3px;
  color: ${Colors.primary};
  font-size: 16px;
  @media (max-width: 425px) {
    font-size: 12px;
    margin: 0;
  }
`;

export const NavLogoTitle = styled.p`
  color: ${Colors.primary};
  font-weight: bold;
  font-size: 24px;
  margin-right: 5px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const ItemsMiddleText = styled.p`
  color: #656469;
  margin-left: 5px;
`;

export const NavContentItemsMiddle = styled(Div)`
  flex: 2;
  justify-content: space-between;
  background-color: #f3f1fc;
  border-radius: 50px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const NavContentItems = styled(Div)`
  flex: 1;
  justify-content: center;
`;

export const SearchCard = styled.div`
  margin-left: 15px;
  margin-right: 5px;
  padding: 8px 10px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 8px 15px #00000014;
`;

export const SignUpText = styled.p`
  color: ${Colors.secundary};
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    color: #62699f;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const SignInButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  background-color: white;
  border: 1px solid ${Colors.secundary};
  border-radius: 15px;
  padding: 10px 20px;
  margin-left: 20px;
  color: ${Colors.secundary};
  font-weight: bold;

  &:hover {
    color: white;
    background-color: ${Colors.secundary};
  }
  @media (max-width: 425px) {
    font-size: 12px;
    padding: 7px 10px;
  }
`;
