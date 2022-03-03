import { Message } from "./styles";

type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return <Message>{message}</Message>;
};

export default Error;
