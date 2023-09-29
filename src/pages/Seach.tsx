import styled from "styled-components";
import Header from "../components/Header";
import Option from "../components/Option";
import { SelectBox } from "../components/styleElements";
import Movies from "../components/Movies";
import { useContext } from "react";
import QueryStringContext from "../contexts/QueryStringContext";

type Props = {};

const Seach = ({}: Props) => {
  const queryValue = useContext(QueryStringContext);

  const yearList = Array.from(
    Array(39),
    (_, index) => new Date().getFullYear() - index
  );

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
              counts={[0, 0, 0]}
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
                Showing <span>1 ~ 10</span> out of <span>500</span> results
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
            <Movies />
          </MainLayout>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  height: auto;
  /* min-height: 90vh; */
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
