import { styled } from "styled-components";
import { SkeletonItem } from "./styleElements";

type Props = {};

const SearchSkeleton = ({}: Props) => {
  return (
    <Container>
      <Info></Info>
    </Container>
  );
};

const Container = styled(SkeletonItem)`
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 50%);
  overflow: hidden;
  width: 200px;
  height: 300px;
  cursor: pointer;
`;

const Info = styled(SkeletonItem)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  margin: auto;
  padding: 10px 8px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  text-align: center;
  border-radius: 0;
`;
export default SearchSkeleton;
