import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { SearchInput } from "./styleElements";
import { useContext, useEffect, useState } from "react";
import QueryStringContext from "../contexts/QueryStringContext";

type Props = {};

const Header = ({}: Props) => {
  const navigate = useNavigate();
  const queryValue = useContext(QueryStringContext);
  const pathname = useLocation().pathname;
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearchInput(queryValue?.state.selectOptions.s || "");
    if (pathname !== "/search" && searchInput)
      navigate(
        `/search?s=${queryValue?.state.selectOptions.s}&type=${queryValue?.state.selectOptions.type}&year=${queryValue?.state.selectOptions.year}&page=${queryValue?.state.selectOptions.page}`
      );
  }, [queryValue?.state.selectOptions.s]);

  return (
    <MyHeader>
      <Container>
        <Title>
          <Logo
            onClick={() => {
              queryValue?.actions.initializeOptions();
              navigate("/");
            }}
          >
            <span>//</span> Movie Search
          </Logo>
        </Title>
        {/* {pathname.includes("/search") ? ( */}
        <>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              name="s"
              value={queryValue?.state.selectOptions.s}
              onChange={queryValue?.actions.selectOnChange}
              placeholder="Search for Movies, Series & more"
              autoFocus
            />
          </SearchInputWrapper>
          <FavorLink onClick={() => navigate("/favor")}>Favor Movies</FavorLink>
        </>
        {/* ) : null} */}
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

const Logo = styled.div`
  cursor: pointer;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  width: 76%;
  max-width: 650px;
`;

const FavorLink = styled.div`
  flex-grow: 1;
  text-align: end;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export default Header;
