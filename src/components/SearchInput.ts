import { styled } from "styled-components";

export const SearchInput = styled.input`
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
