import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchInput, SelectBox } from "../components/styleElements";
import QueryStringContext from "../contexts/QueryStringContext";

type Props = {};

const Home = ({}: Props) => {
  const navigate = useNavigate();
  const queryValue = useContext(QueryStringContext);
  const [searchInput, setSearchInput] = useState("");

  const yearList = Array.from(
    Array(39),
    (_, index) => new Date().getFullYear() - index
  );

  useEffect(() => {
    if (searchInput.trim().length > 2) {
      navigate(
        `/search?s=${searchInput}&type=${queryValue?.state.selectOptions.type}&year=${queryValue?.state.selectOptions.year}&page=${queryValue?.state.selectOptions.page}&count=${queryValue?.state.selectOptions.count}`
      );
    }
  }, [searchInput]);

  return (
    <Main>
      <Container>
        <Title>
          <span>//</span> Movie Search
        </Title>
        <Subtitle>Search across a half million movies</Subtitle>
        <InputWrapper>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              name="s"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for Movies, Series & more "
            />
          </SearchInputWrapper>
          <SelectWrapper>
            <SelectBox
              name="type"
              value={queryValue?.state.selectOptions.type}
              onChange={queryValue?.actions.selectOnChange}
            >
              <option value="movie">movie</option>
              <option value="series">series</option>
              <option value="episode">episode</option>
            </SelectBox>
            <SelectBox
              name="count"
              value={queryValue?.state.selectOptions.count}
              onChange={queryValue?.actions.selectOnChange}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </SelectBox>
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
          </SelectWrapper>
        </InputWrapper>
      </Container>
    </Main>
  );
};

const Main = styled.main`
  min-height: 90vh;
`;

const Container = styled.div`
  padding-top: 205px;
  text-align: center;
`;

const Title = styled.div`
  color: #424242;
  font-size: 54px;
  font-weight: 600;

  span {
    color: #40a9ff;
  }
`;

const Subtitle = styled.div`
  color: #627078;
  font-size: 18px;
  padding: 50px 0;
`;

const InputWrapper = styled.div`
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 25px 100px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export default Home;
