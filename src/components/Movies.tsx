import styled from "styled-components";
import MovieItem from "./MovieItem";

type Props = {};

const Movies = ({}: Props) => {
  return (
    <Container>
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 23px;
  position: relative;
`;

export default Movies;
