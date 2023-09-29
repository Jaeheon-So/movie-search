import styled from "styled-components";

type Props = {
  title: string;
  options: string[];
  counts?: number[];
};

const Option = ({ title, options, counts }: Props) => {
  const labels = options.map((option, idx) => (
    <Label key={option}>
      <InputWrapper>
        <input type="checkbox" />
        <div>{option}</div>
      </InputWrapper>
      {counts ? <span>{counts[idx]}</span> : null}
    </Label>
  ));

  return (
    <Container>
      <Title>{title}</Title>
      <LabelWrapper>{labels}</LabelWrapper>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div`
  margin-bottom: 18px;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 16px;
    height: 16px;
    outline: none;
    margin: 0;
  }

  span {
    color: #a6a9af;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
// const Container = styled.div``
// const Container = styled.div``

export default Option;
