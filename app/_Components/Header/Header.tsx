"use client";
import React from "react";
import Search from "../Search/Search";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Order from "../Orders/Order";
import SfLogo from "../SfLogo/SfLogo";
import Address from "../Address/Address";
import styled from "styled-components";
import Category from "../Category/Category";
const Wrapperx = styled.div`
  /* background-color: red; */
  height: 9vh;
  display: flex;
  direction: rtl;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px lightgray;
`;

const Header = () => {
  return (
    <Wrapperx>
      <SfLogo />
      <Address />
      <Search />
      <ProfileInfo />
      <Order />
    </Wrapperx>
  );
};

export default Header;
