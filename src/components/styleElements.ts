import { styled } from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 100px;
  font-size: 18px;
  padding: 15px 30px;
  outline: none;
  max-width: 700px;
  min-width: 215px;

  &:focus {
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    border-color: #40a9ff;
  }
`;

export const SelectBox = styled.select`
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
