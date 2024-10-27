"use client";
import Category from "./_Components/Category/Category";
import Header from "./_Components/Header/Header";
import Classification from "./_Components/Classification/Classification";
import NewInSnappFood from "./_Components/NewInSnappFood/NewInSnappFood";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  background-color: white;
  width: 100vw;
 
`;

const BodyWrapper = styled.div`
  padding-top: 25vh;
  background-color: white;
`
export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <Category />
      </Wrapper>
      <BodyWrapper>
        <Classification />
        <NewInSnappFood />
      </BodyWrapper>
    </>
  );
}
