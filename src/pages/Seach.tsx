import styled from "styled-components";
import Header from "../components/Header";
import Option from "../components/Option";

type Props = {};

const Seach = ({}: Props) => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <SideLayout>
            <Option
              title="Type"
              options={["Movies", "Series", "Episode"]}
              counts={[0, 0, 0]}
            />
            <Option title="List Count" options={["10", "20", "30"]} />
          </SideLayout>
          <MainLayout></MainLayout>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding-top: 32px;
  background-color: #fcfcfc;
`;

const Container = styled.div`
  max-width: 1250px;
  margin: auto;
  display: flex;
  gap: 32px;
  /* height: 3000px; */
  padding: 0 24px;
`;

const SideLayout = styled.div`
  width: 24%;
  min-width: 130px;
  /* border: 1px solid blueviolet; */
  color: #627078;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const MainLayout = styled.div`
  width: 76%;
  /* padding-left: 32px; */
  border: 1px solid green;
`;

export default Seach;
