import { styled } from "styled-components";
import { SkeletonItem } from "./styleElements";

type Props = {};

const DetailItemsSkeleton = ({}: Props) => {
  return (
    <div>
      <Title></Title>
      <Value></Value>
    </div>
  );
};

const Title = styled(SkeletonItem)`
  margin: 24px 0 6px;
  width: 60px;
  height: 24px;
`;

const Value = styled(SkeletonItem)`
  width: 50%;
  height: 19px;
`;

export default DetailItemsSkeleton;
