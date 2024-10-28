"use client";
import React from "react";
import Search from "../Search/Search";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Order from "../Orders/Order";
import Address from "../Address/Address";
import styled from "styled-components";
import SnappFood from "@/public/assets/icon/SnappFood";
const Wrapperx = styled.div`
  height: 6vh;
  display: flex;
  direction: rtl;
  align-items: center;
  margin-right: 10px;
`;

const Header = () => {
  return (
    <Wrapperx>
      <SnappFood/>
      <Address />
      <Search />
      <ProfileInfo />
      <Order />
    </Wrapperx>
  );
};

export default Header;
