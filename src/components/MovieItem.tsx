import styled from "styled-components";
import defaultImg from "/No_img.jpg";
import { useNavigate } from "react-router-dom";
import { SearchMovieData } from "../@types/data";
import { AiFillHeart } from "react-icons/ai";
import FavorContext from "../contexts/FavorContext";
import { useContext } from "react";

type Props = {
  movie: SearchMovieData;
};

const MovieItem = ({ movie }: Props) => {
  const navigate = useNavigate();
  const favorList = useContext(FavorContext);

  const toggleFavor = (e: any) => {
    e.stopPropagation();

    favorList?.state.favorMovie.find((item) => item.imdbID === movie.imdbID)
      ? favorList.actions.deleteFavor(movie.imdbID)
      : favorList?.actions.addFavor({
          ...movie,
        });
  };

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
      <AiFillHeart
        className={
          favorList?.state.favorMovie.find(
            (item) => item.imdbID === movie.imdbID
          )
            ? "active"
            : ""
        }
        onClick={toggleFavor}
      />
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

  svg {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    color: #bcbcbc;
    transition: 0.5s;

    &.active {
      color: red;
    }

    &:hover {
      transform: scale(1.3);
    }
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
