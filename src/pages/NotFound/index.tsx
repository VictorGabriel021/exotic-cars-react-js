import { Link } from "react-router-dom";

import { Container, Content, Title, Text } from "./styles";

import { BsDoorClosed } from "react-icons/bs";

const NotFound = () => {
  return (
    <Container>
      <Content>
        <BsDoorClosed size={80} />
        <Title>Esta Página não está disponível</Title>
        <Text>
          O link pode não estar funcionando ou a Página pode ter sido removida.
          Verifique se o link que você está tentando abrir está correto.
        </Text>
        <Link to="/">Página Inicial</Link>
      </Content>
    </Container>
  );
};

export default NotFound;
