import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { SearchInput } from "./styleElements";

type Props = {};

const Header = ({}: Props) => {
  return (
    <MyHeader>
      <Container>
        <Title>
          <Link to={"/"}>
            <span>//</span> Movie Search
          </Link>
        </Title>
        <SearchInputWrapper>
          <SearchInput
            type="text"
            placeholder="Search for Movies, Series & more "
          />
        </SearchInputWrapper>
      </Container>
    </MyHeader>
  );
};

const MyHeader = styled.header`
  border-bottom: 1px solid #eee;
`;

const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 30px 24px 40px;
`;

const Title = styled.div`
  font-size: 22px;
  color: #424242;
  font-weight: 600;
  width: 24%;
  min-width: 170px;

  a {
    color: #424242;
  }

  span {
    color: #40a9ff;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  width: 76%;
  max-width: 650px;
`;

export default Header;
