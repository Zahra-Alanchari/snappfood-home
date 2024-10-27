import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  padding:1%;
  direction: rtl;
  box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
    rgba(0, 0, 0, 0.05) 0px 2px 8px -2px;
`;
export const ProductItem = styled.div`
  border: 1px solid rgb(231, 232, 233);
  background-color: rgb(249, 250, 251);
  border-radius: 12px;
  margin-left: 12px;
  height: 132px;
  width: 104.328px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;