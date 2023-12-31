import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

type Props = {};

const Footer = ({}: Props) => {
  const pathname = useLocation().pathname;

  return (
    <MyFooter color={pathname.includes("search") ? "#fcfcfc" : "#fff"}>
      <Title>
        About
        <Detail w="400px">
          <p>
            <span>//</span> This site searches movie by using{" "}
            <a href="https://www.omdbapi.com/" target="_blank">
              OMDb API
            </a>
            . It searches for the movie which includes exact string you enter.
            You can search movies by type and by year.
          </p>
          <p>
            This site was created with reference to{" "}
            <a href="https://grep.app/" target="_blank">
              grep.app
            </a>
            .
          </p>
        </Detail>
      </Title>
      <Title>
        Contact
        <Detail w="300px">
          <p>
            Please contact me by email address below. <br />
            Please also visit my github.
          </p>
          <p>
            Email: thwogjs98@gmail.com
            <br />
            Github:{" "}
            <a href="https://github.com/Jaeheon-So" target="_blank">
              https://github.com/Jaeheon-So
            </a>
          </p>
        </Detail>
      </Title>
    </MyFooter>
  );
};

const MyFooter = styled.footer<{ color: string }>`
  /* position: absolute;
  bottom: 0; */
  height: 10vh;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: ${(props) => props.color};
`;

const Title = styled.div`
  color: #627078;
  cursor: pointer;
  position: relative;
  padding: 10px 0;

  &:hover div {
    display: flex;
  }
`;

const Detail = styled.div<{ w: string }>`
  cursor: default;
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  width: ${(props) => props.w};
  height: 100px;
  padding: 12px 16px;
  border-radius: 10px;
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  word-break: keep-all;
  background-color: #fff;
  position: absolute;
  top: -125px;
  left: ${(props) => -(parseInt(props.w) / 2 - 20)}px;

  span {
    color: #40a9ff;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: #40a9ff;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Footer;
