import {
  NavContainer,
  NavContent,
  NavContentItems,
  NavLogoTitle,
  NavLogoText,
  NavContentItemsMiddle,
  SearchCard,
  SignUpText,
  SignInButton,
  Div,
  ItemsMiddleText,
} from "./styles";

import { IoLocationSharp, IoCalendarSharp, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <NavContainer>
      <NavContent>
        <NavContentItems>
          <NavLogoTitle>EXOTIC</NavLogoTitle>
          <NavLogoText>CARS</NavLogoText>
        </NavContentItems>

        <NavContentItemsMiddle>
          <Div>
            <IoLocationSharp color="#C3C3C3" size={24} />
            <ItemsMiddleText>North Carolina, NC 90025</ItemsMiddleText>
          </Div>
          <Div>
            <IoCalendarSharp color="#C3C3C3" size={24} />
            <ItemsMiddleText>11/03/2021</ItemsMiddleText>
          </Div>
          <Div>
            <IoCalendarSharp color="#C3C3C3" size={24} />
            <ItemsMiddleText> 12/12/2021</ItemsMiddleText>
          </Div>
          <SearchCard>
            <IoSearch color="#7b89f4" size={24} />
          </SearchCard>
        </NavContentItemsMiddle>

        <NavContentItems>
          <SignUpText>Sign up</SignUpText>
          <SignInButton>Sign in</SignInButton>
        </NavContentItems>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
