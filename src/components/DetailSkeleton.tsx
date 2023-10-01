import { styled } from "styled-components";
import { SkeletonItem } from "./styleElements";
import DetailItemsSkeleton from "./DetailItemsSkeleton";

type Props = {};

const DetailSkeleton = ({}: Props) => {
  return (
    <Container>
      <Poster></Poster>
      <MovieDetail>
        <Title></Title>
        <Labels></Labels>
        <Plot></Plot>
        <DetailItemsSkeleton />
        <DetailItemsSkeleton />
        <DetailItemsSkeleton />
        <DetailItemsSkeleton />
      </MovieDetail>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  display: flex;
  gap: 50px;
  padding: 0 24px;
`;

const Poster = styled(SkeletonItem)`
  width: 400px;
  height: 600px;
  box-sizing: border-box;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 50%);
  border-radius: 10px;
  overflow: hidden;
`;

const MovieDetail = styled.div`
  width: 800px;
  box-sizing: border-box;
  color: #627078;
`;

const Title = styled(SkeletonItem)`
  width: 55%;
  height: 48px;
  margin-bottom: 30px;
`;

const Labels = styled(SkeletonItem)`
  width: 50%;
  height: 19px;
`;

const Plot = styled(SkeletonItem)`
  margin-top: 20px;
  width: 100%;
  height: 150px;
`;

export default DetailSkeleton;
