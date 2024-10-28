import styled from "styled-components";

export const SearchInput = styled.input`
  width: 418px;
  height: 48px;
  border-radius: 10px;
  background-color: rgb(235, 237, 240);
  border: 0;
  &::placeholder{
    padding-right: 40px;
    font-size: 18px;
    font-weight: 400;
    color: rgb(166, 170, 173);
  }
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-grow: 0.27;
  position: relative;
`;
export const Wrapper = styled.div`
  position: relative;
  margin:0 110px 0 260px;
`;

export const SearchIconWrapper = styled.div`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);

`
