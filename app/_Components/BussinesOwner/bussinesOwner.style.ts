import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 4rem 0 4rem;
  background-color: rgb(249, 250, 251);
  border-radius: 2rem;
  width: 1295px;
  height: 331px;
  margin: 0rem auto 50px auto;
  direction: rtl;
`;
export const BusnessWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  & img {
    position: absolute;
    top: -100px;
    left: 10px;
  }
  & a{
    text-decoration: none;
  }
  & button {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: 150ms ease-out;
    min-width: 6.5rem;
    width: auto;
    height: 3rem;
    border: 0 ;
    border-radius: 0.375rem;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 0, 166);
    font-size: 1.125rem;
    box-shadow: none;
    font-weight: 700;
    
  }
`;

export const Question = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 2rem;
  color: rgb(58, 61, 66);
  margin-bottom: 40px;
`;
export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 2rem;
  color: rgb(58, 61, 66);
  margin-bottom: 40px;
`;