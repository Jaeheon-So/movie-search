import styled from "styled-components";
import Header from "../components/Header";
import { useContext } from "react";
import FavorContext from "../contexts/FavorContext";
import MovieItem from "../components/MovieItem";
import { SearchMovieData } from "../@types/data";
import ErrorLayout from "../components/ErrorLayout";

type Props = {};

const Favor = ({}: Props) => {
  const favorList = useContext(FavorContext);
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Title>Favor List</Title>
          <FavorWrapper>
            {favorList?.state.favorMovie.length! > 0 ? (
              favorList?.state.favorMovie.map((movie: SearchMovieData) => (
                <MovieItem movie={movie} key={movie.imdbID} />
              ))
            ) : (
              <ErrorLayout message="Add your favorite movies!" />
            )}
            {}
          </FavorWrapper>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  height: auto;
  min-height: 69vh;
  padding-top: 32px;
  line-height: 1.2;
`;

const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  /* display: flex; */
  padding: 0 20px;
`;

const FavorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 24px;
  text-align: center;
`;
export default Favor;
