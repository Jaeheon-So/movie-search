import styled from "styled-components";

type Props = {};

const Home = ({}: Props) => {
  return (
    <main>
      <Container>
        <Title>
          <span>//</span> Movie Search
        </Title>
        <Subtitle>Search across a half million movies</Subtitle>
        <InputWrapper>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              placeholder="Search for Movies, Series & more "
            />
          </SearchInputWrapper>
          <SelectWrapper>
            <Select name="type" id="type">
              <option value="movie">movie</option>
              <option value="series">series</option>
              <option value="episode">episode</option>
            </Select>
            <Select name="list-count" id="list-count">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </Select>
            <Select name="year" id="year">
              <option value="all">All Years</option>
            </Select>
          </SelectWrapper>
        </InputWrapper>
      </Container>
    </main>
  );
};

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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 25px 100px;
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 20px; */
`;

const SearchInputWrapper = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 100px;
  font-size: 18px;
  padding: 15px 30px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    border-color: #40a9ff;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Select = styled.select`
  width: 130px;
  padding: 6px 36px 6px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 15px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    border-color: #40a9ff;
  }
`;
// const Container = styled.div``;
// const Container = styled.div``;

export default Home;
