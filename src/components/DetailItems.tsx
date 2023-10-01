import styled from "styled-components";

type Props = {
  title: string;
  value: string;
};

const DetailItems = ({ title, value }: Props) => {
  return (
    <div>
      <Title>{title}</Title>
      <span>{value}</span>
    </div>
  );
};

const Title = styled.h3`
  margin: 24px 0 6px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export default DetailItems;
