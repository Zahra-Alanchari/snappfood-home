"use client";
import styled from "styled-components";
import Category from "./_Components/Category/Category";
import Header from "./_Components/Header/Header";
import Classification from "./_Components/Classification/Classification";

export default function Home() {
  return (
    <>
      <Header />
      <Category />
      <Classification/>
    </>
  );
}
