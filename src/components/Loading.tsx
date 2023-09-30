import { styled } from "styled-components";
import Skeleton from "./Skeleton";

type Props = {};

const Loading = ({}: Props) => {
  return (
    <Container>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 23px;
  position: relative;
`;

export default Loading;
