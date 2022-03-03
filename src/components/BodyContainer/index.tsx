import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
};

const BodyContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default BodyContainer;
