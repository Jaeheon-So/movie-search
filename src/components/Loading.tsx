import { styled } from "styled-components";
import SearchSkeleton from "./SearchSkeleton";

type Props = {};

const Loading = ({}: Props) => {
  return (
    <Container>
      <SearchSkeleton />
      <SearchSkeleton />
      <SearchSkeleton />
      <SearchSkeleton />
      <SearchSkeleton />
      <SearchSkeleton />
      <SearchSkeleton />
      <SearchSkeleton />
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
