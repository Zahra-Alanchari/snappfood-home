"use client";
import React from "react";
import Search from "../Search/Search";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Order from "../Orders/Order";
import SfLogo from "../SfLogo/SfLogo";
import Address from "../Address/Address";
import styled from "styled-components";
const Wrapperx = styled.div`
  height: 10vh;
  display: flex;
  direction: rtl;
  align-items: center;
  justify-content: space-between;
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
