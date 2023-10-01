import styled from "styled-components";
import Header from "../components/Header";
import Option from "../components/Option";
import { SelectBox } from "../components/styleElements";
import Movies from "../components/Movies";
import { useContext, useEffect, useState } from "react";
import QueryStringContext from "../contexts/QueryStringContext";
import { useSearchParams } from "react-router-dom";
import { getSearchMovieData } from "../apis/api";
import { SearchMovieResponseType, SearchTypeCount } from "../@types/data";
import ErrorLayout from "../components/ErrorLayout";
import { useDebounce } from "../hooks/useDebounce";
import Loading from "../components/Loading";
import Paging from "../components/Paging";

type Props = {};

const Seach = ({}: Props) => {
  const queryValue = useContext(QueryStringContext);
  const [searchParams] = useSearchParams();
  const [searchMovieData, setSearchMovieData] =
    useState<SearchMovieResponseType>();
  const [typeCount, setTypeCount] = useState<SearchTypeCount>({
    movie: "0",
    series: "0",
    episode: "0",
  });
  const debouncedSearchTerm = useDebounce(
    queryValue?.state.selectOptions.s || "",
    500
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const yearList = Array.from(
    Array(39),
    (_, index) => new Date().getFullYear() - index
  );

  const fetchSearchData = async () => {
    if (debouncedSearchTerm?.length! === 0)
      return setSearchMovieData({
        Response: "False",
        Error: "Please enter your keyword to search.",
      });
    if (debouncedSearchTerm?.length! < 3)
      return setSearchMovieData({
        Response: "False",
        Error: "Too many results.",
      });
    // if (typeCount[searchParams.get("type")!] === "0")
    //   return setSearchMovieData({
    //     Response: "False",
    //     Error: `${searchParams.get("type")} not found!`,
    //   });
    setIsLoading(true);
    const data = await getSearchMovieData({
      s: debouncedSearchTerm || "",
      type: searchParams.get("type") || "movie",
      page: searchParams.get("page") || "1",
      y: searchParams.get("year") === "all" ? "" : searchParams.get("year")!,
    });

    if (data.Error) data.Error = `${searchParams.get("type")} not found!`;

    setSearchMovieData(data);
    setIsLoading(false);
    console.log(data);
  };

  const fetchTypeCount = async () => {
    const obj: SearchTypeCount = { movie: "0", series: "0", episode: "0" };

    if (debouncedSearchTerm?.length! > 2) {
      for (let key of Object.keys(obj)) {
        const data = await getSearchMovieData({
          s: searchParams.get("s") || "",
          type: key,
          page: "1",
          y:
            searchParams.get("year") === "all" ? "" : searchParams.get("year")!,
        });

        obj[key] = data.totalResults || "0";
      }
    }
    setTypeCount(obj);
  };

  useEffect(() => {
    fetchTypeCount();
  }, [debouncedSearchTerm, queryValue?.state.selectOptions.year]);

  // useEffect(() => {
  //   if (
  //     typeCount[searchParams.get("type")!] === "0" &&
  //     searchParams.get("s")?.length! > 2
  //   )
  //     setSearchMovieData({
  //       Response: "False",
  //       Error: `${searchParams.get("type")} not found!`,
  //     });
  // }, [typeCount]);

  useEffect(() => {
    if (debouncedSearchTerm !== undefined) fetchSearchData();
  }, [debouncedSearchTerm, searchParams]);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <SideLayout>
            <Option
              title="Type"
              name="type"
              options={["movie", "series", "episode"]}
              counts={Object.values(typeCount || [])}
            />
            <Option
              title="List Count"
              name="count"
              options={["10", "20", "30"]}
            />
          </SideLayout>
          <MainLayout>
            <MainTop>
              <PageInfo>
                Showing{" "}
                {searchMovieData?.totalResults ? (
                  <span>{`${
                    10 * (Number(queryValue?.state.selectOptions.page) - 1) + 1
                  } ~ ${
                    10 * Number(queryValue?.state.selectOptions.page) >
                    Number(searchMovieData?.totalResults)
                      ? Number(searchMovieData?.totalResults)
                      : 10 * Number(queryValue?.state.selectOptions.page)
                  }`}</span>
                ) : (
                  <span>0</span>
                )}{" "}
                out of <span>{searchMovieData?.totalResults || "0"}</span>{" "}
                results
              </PageInfo>
              <SelectBox
                name="year"
                value={queryValue?.state.selectOptions.year}
                onChange={queryValue?.actions.selectOnChange}
              >
                <option value="all">All Years</option>
                {yearList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </SelectBox>
            </MainTop>
            {isLoading ? (
              <Loading />
            ) : searchMovieData?.Search?.length! > 0 ? (
              <Movies searchMovieData={searchMovieData?.Search || []} />
            ) : (
              <ErrorLayout message={searchMovieData?.Error || ""} />
            )}
            {typeCount[searchParams.get("type")!] === "0" ? null : (
              <Paging totalResults={searchMovieData?.totalResults || "0"} />
            )}
          </MainLayout>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  height: auto;
  min-height: 68.8vh;
  padding-top: 32px;
  background-color: #fcfcfc;
`;

const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  display: flex;
  gap: 70px;
  /* height: 3000px; */
  padding: 0 24px;
`;

const SideLayout = styled.div`
  width: 24%;
  min-width: 130px;
  color: #627078;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const MainLayout = styled.div`
  width: 76%;
  /* padding-left: 32px; */
`;

const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding-bottom: 15px;
`;

const PageInfo = styled.div`
  color: #615d58;
  span {
    font-weight: 600;
  }
`;

export default Seach;
