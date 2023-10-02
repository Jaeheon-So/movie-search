import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getDetailhMovieData } from "../apis/api";
import { DetailMovieResponseType } from "../@types/data";
import defaultImg from "/No_img.jpg";
import DetailItems from "../components/DetailItems";
import DetailSkeleton from "../components/DetailSkeleton";
import ErrorLayout from "../components/ErrorLayout";
import { AiFillHeart } from "react-icons/ai";
import FavorContext from "../contexts/FavorContext";

type Props = {};

const Detail = ({}: Props) => {
  const { id } = useParams();
  const [detailMovieData, setDetailMovieData] =
    useState<DetailMovieResponseType>({} as DetailMovieResponseType);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const favorList = useContext(FavorContext);

  const fetchDetailData = async () => {
    setisLoading(true);
    const data = await getDetailhMovieData({ i: id || "", plot: "full" });
    setDetailMovieData(data);
    setisLoading(false);
  };

  const toggleFavor = () => {
    favorList?.state.favorMovie.find(
      (item) => item.imdbID === detailMovieData.imdbID
    )
      ? favorList.actions.deleteFavor(detailMovieData.imdbID)
      : favorList?.actions.addFavor({
          Title: detailMovieData.Title,
          Year: detailMovieData.Year,
          imdbID: detailMovieData.imdbID,
          Type: detailMovieData.Type,
          Poster: detailMovieData.Poster,
        });
  };

  useEffect(() => {
    fetchDetailData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        {isLoading ? (
          <DetailSkeleton />
        ) : detailMovieData.Error ? (
          <ErrorLayout message={detailMovieData.Error} />
        ) : (
          <Container>
            <Poster>
              <img
                src={detailMovieData.Poster}
                alt="movie-poster"
                onError={(e) => (e.currentTarget.src = defaultImg)}
              />
            </Poster>
            <MovieDetail>
              <Title>
                <div>{detailMovieData.Title || "N/A"}</div>
                <AiFillHeart
                  className={
                    favorList?.state.favorMovie.find(
                      (item) => item.imdbID === detailMovieData.imdbID
                    )
                      ? "active"
                      : ""
                  }
                  onClick={toggleFavor}
                />
              </Title>
              <Labels>
                <span>{detailMovieData.Released}</span>
                <span>{detailMovieData.Runtime}</span>
                <span>{detailMovieData.Country}</span>
              </Labels>
              <Plot>{detailMovieData.Plot}</Plot>
              <DetailItems
                title="Ratings"
                value={`${detailMovieData.imdbRating} / 10` || "N/A / 10"}
              />
              <DetailItems
                title="Actors"
                value={detailMovieData.Actors || "N/A"}
              />
              <DetailItems
                title="Director"
                value={detailMovieData.Director || "N/A"}
              />
              <DetailItems
                title="Production"
                value={detailMovieData.Production || "N/A"}
              />
              <DetailItems
                title="Genre"
                value={detailMovieData.Genre || "N/A"}
              />
            </MovieDetail>
          </Container>
        )}
      </Main>
    </>
  );
};

const Main = styled.main`
  height: auto;
  min-height: 73vh;
  padding-top: 32px;
  line-height: 1.2;
`;

const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  display: flex;
  gap: 50px;
  padding: 0 24px;
`;

const Poster = styled.div`
  width: 400px;
  height: 600px;
  box-sizing: border-box;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 50%);
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const MovieDetail = styled.div`
  width: 800px;
  box-sizing: border-box;
  color: #627078;
`;

const Title = styled.div`
  color: #000;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  svg {
    display: inline-block;
    color: #bcbcbc;
    transition: 0.6s;
    cursor: pointer;

    &.active {
      color: red;
    }

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const Labels = styled.div`
  span {
    color: #fdc000;
    &::after {
      content: "·";
      margin: 0 6px;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

const Plot = styled.div`
  margin-top: 20px;
  width: 100%;
  line-height: 1.5;
`;

export default Detail;
