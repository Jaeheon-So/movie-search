import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchInput, SelectBox } from "../components/styleElements";

type Props = {};

const Home = ({}: Props) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectOptions, setSelectOptions] = useState({
    type: "movie",
    year: "all",
    count: "10",
  });
  const yearList = Array.from(
    Array(39),
    (_, index) => new Date().getFullYear() - index
  );

  const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setSelectOptions({
      ...selectOptions,
      [name]: value,
    });
  };

  useEffect(() => {
    if (searchInput.trim().length > 0)
      navigate(
        `/search?q=${searchInput.trim()}&type=${selectOptions.type}&year=${
          selectOptions.year
        }&page=${1}&count=${selectOptions.count}`
      );
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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for Movies, Series & more "
            />
          </SearchInputWrapper>
          <SelectWrapper>
            <SelectBox
              name="type"
              value={selectOptions.type}
              onChange={selectOnChange}
            >
              <option value="movie">movie</option>
              <option value="series">series</option>
              <option value="episode">episode</option>
            </SelectBox>
            <SelectBox
              name="count"
              value={selectOptions.count}
              onChange={selectOnChange}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </SelectBox>
            <SelectBox
              name="year"
              value={selectOptions.year}
              onChange={selectOnChange}
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
