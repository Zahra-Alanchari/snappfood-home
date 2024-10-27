import styled from "styled-components";

export const Wrapper = styled.div`
  direction: rtl;
  padding: 4.5%;
`;

export const NewInSnappFoodWrapper = styled.div`
  display: flex;
  /* padding: 0.5%; */
  flex-direction: column;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 15px;
  height: 373px;
  /* background-color: red; */
`;

export const NewItem = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(58, 61, 66, 0.06);
  width: 315px;
  overflow: hidden;
  border-radius: 8px;
  height: 373px;
  position: relative;
  cursor: pointer;
  box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
    rgba(0, 0, 0, 0.05) 0px 2px 8px -2px;
  /* display: flex; */
  /* flex-direction: row; */
  &:hover {
    box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
      rgba(0, 0, 0, 0.3) 0px 8px 32px -16px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 15px;
  & h2 {
    font-size: 18px;
    font-weight: 700;
    color: rgb(58, 61, 66);
  }
`;

export const ProfileImage = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 12px;
  overflow: hidden;
  height: 80px;
  border: 4px solid white;
  box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
    rgba(0, 0, 0, 0.3) 0px 8px 32px -16px;
`;

export const InfoStar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

export const Delivery = styled.div`
  /* background-color: red; */
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeliveryWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
    rgba(0, 0, 0, 0.05) 0px 2px 8px -2px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px;
  border-radius: 72px;
`;