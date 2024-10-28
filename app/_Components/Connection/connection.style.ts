import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 4rem;
  background-color: rgb(235, 237, 240);
  border-bottom-right-radius: 7.5rem;
  width: 1295px;
  height: 557px;
  margin: 0 auto 140px auto;
  direction: rtl;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  padding: 0 64px;
  position: relative;
  & img {
    position: absolute;
    top: -50%;
    left: 0;
  }

  & input {
    width: 35vw;
    min-width: 17.8125rem;
    max-width: 50%;
    height: 3rem;
    margin-top: 0.375rem;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    border: 0.0625rem solid rgba(58, 61, 66, 0.12);
    border-radius: 0.375rem;
    box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
      rgba(0, 0, 0, 0.2) 0px 4px 16px -8px;
    &::placeholder {
      padding-right: 20px;
      font-size: 16px;
    }
  }
  & button {
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    min-width: 6.6875rem;
    width: auto;
    height: 2rem;
    border: 1rem solid rgb(255, 0, 166);
    border-radius: 0.375rem;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 0, 166);
    background-clip: padding-box;
    box-shadow: none;
    font-size: 0.875rem;
    font-weight: 700;
    position: absolute;
    top: 13.5px;
    left: 146px;
  }
`;
export const Information = styled.div`
  /* background-color: red; */
  width: 430px;
  display: flex;
  flex-direction: column;
`;
export const Sf = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 30px;
  width: auto;
  height: auto;
  padding: 0px;
  margin-top: 0;
  margin-bottom: 40px;
  display: inline-block;
  color: rgb(58, 61, 66);
`;
export const SfDescription = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  width: auto;
  height: auto;
  padding: 0px;
  margin: 0px 0px 40px 0;
  display: inline-block;
  color: rgb(83, 86, 92);
  text-align: initial;
`;

export const DownLoadLink = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1rem;
  color: rgb(83, 86, 92);
`;
export const SocialAddress = styled.div`
  /* background-color: yellow; */
  display: flex;
  gap: 16px;
`;