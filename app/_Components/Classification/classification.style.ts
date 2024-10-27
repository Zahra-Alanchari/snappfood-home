import styled from "styled-components";

export const ClassificationWrapper = styled.div`
  display: flex;
  padding-top: 0.5%;
  direction: rtl;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 37px;
`;

export const ProductItem = styled.div`
  border: 3px solid white;
  background-color: #f7f5f5;
  border-radius: 12px;
  box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
    rgba(0, 0, 0, 0.3) 0px 8px 32px -16px;
  height: 95px;
  width: 179px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:hover {
    box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
      rgba(0, 0, 0, 0.2) 0px 4px 16px -8px;
  }
`;
export const Wrapper = styled.div`
  direction: rtl;
  padding:4.5% 4.5% 6.5% 4.5%;
`;
export const CategoryName = styled.span`
  position: absolute;
  top: 70%;
  right: -5px;
  background-color: white;
  z-index: 1;
  height: 30px;
  border-radius: 8px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5rem;
  &:hover svg {
    transform: translateX(-3px);
    transition: 200ms ease-in-out;
    backface-visibility: hidden;
  }
`;
