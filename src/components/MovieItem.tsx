import styled from "styled-components";
import defaultImg from "/No_img.jpg";
import { useNavigate } from "react-router-dom";
import { SearchMovieData } from "../@types/data";

type Props = {
  movie: SearchMovieData;
};

const MovieItem = ({ movie }: Props) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/detail/${movie.imdbID}`)}>
      <Info>
        <Year>{movie.Year}</Year>
        <Title>{movie.Title}</Title>
      </Info>
      <img
        src={movie.Poster}
        alt="movie-poster"
        onError={(e) => (e.currentTarget.src = defaultImg)}
      ></img>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 50%);
  overflow: hidden;
  width: 200px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 10px 8px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  text-align: center;
  line-height: 1.5;
`;

const Year = styled.div`
  color: yellow;
`;
const Title = styled.div`
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default MovieItem;
