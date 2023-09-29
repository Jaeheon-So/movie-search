import { useContext } from "react";
import styled from "styled-components";
import QueryStringContext from "../contexts/QueryStringContext";

type Props = {
  title: string;
  name: string;
  options: string[];
  counts?: number[];
};

const Option = ({ title, name, options, counts }: Props) => {
  const queryValue = useContext(QueryStringContext);

  const labels = options.map((option, idx) => (
    <Label key={option}>
      <InputWrapper>
        <div
          className={
            queryValue?.state.selectOptions[name] === option
              ? "checkbox checked"
              : "checkbox"
          }
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={queryValue?.state.selectOptions[name] === option}
            onChange={queryValue?.actions.selectOnChange}
          />
          <span className="inner"></span>
        </div>
        <div>{option.charAt(0).toUpperCase() + option.slice(1)}</div>
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
  margin-bottom: 20px;
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

  span {
    color: #a6a9af;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .checkbox {
    width: 16px;
    height: 16px;
    position: relative;
    input {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      cursor: pointer;
      margin: 0;
      padding: 0;
      opacity: 0;
    }
    &.checked::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #1890ff;
      border-radius: 2px;
      visibility: hidden;
      animation-fill-mode: backwards;
      content: "";
    }
  }

  .inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    border-collapse: separate;
    transition: all 0.3s;
    box-sizing: border-box;
  }

  .checked {
    .inner {
      background-color: #1890ff;
      border-color: #1890ff;

      &::after {
        position: absolute;
        top: 50%;
        left: 22%;
        width: 5.71428571px;
        height: 9.14285714px;
        display: table;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(1) translate(-50%, -50%);
        opacity: 1;
        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
        box-sizing: border-box;
        content: " ";
      }
    }
  }

  &:hover {
    .inner {
      border-color: #1890ff;
    }
  }
`;
// const Container = styled.div``
// const Container = styled.div``

export default Option;
