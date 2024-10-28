import styled from "styled-components";

 export const Wrapper = styled.div`
  background-color: rgb(249, 250, 251);
`;

 export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  direction: rtl;
  justify-content: space-between;
  padding: 42px 40px 41px 40px;
`;

 export const Social = styled.div`
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  & button {
    background-color: rgb(255, 255, 255);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    box-shadow: (58, 61, 66, 0.06) 0px 1px 0px,
      rgba(0, 0, 0, 0.2) 0px 4px 16px -8px;
    border: 0;
  }
`;
 export const Lgo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & p {
    margin: 0 0 5px 0;
    padding: 0;
  }
`;
 export const SocialLogo = styled.div`
  gap: 20px;
  padding-right: 85px;
  display: flex;
  padding-top: 20px;
`;