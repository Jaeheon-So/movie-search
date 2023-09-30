import styled from "styled-components";

type Props = {
  message: string;
};

const ErrorLayout = ({ message }: Props) => {
  return (
    <Container>{message.charAt(0).toUpperCase() + message.slice(1)}</Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  height: 100%;
`;

export default ErrorLayout;
