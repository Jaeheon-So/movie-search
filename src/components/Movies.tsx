import styled from "styled-components";
import MovieItem from "./MovieItem";
import { SearchMovieData } from "../@types/data";

type Props = {
  searchMovieData: SearchMovieData[];
};

const Movies = ({ searchMovieData }: Props) => {
  return (
    <Container>
      {searchMovieData.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} />
      ))}
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
