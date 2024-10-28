import React from "react";

import styled from "styled-components";
import OrderIcon from "@/public/assets/icon/OrderIcon";
import { OrderWrapper } from "./order.style";



const Order = () => {
  return (
    <OrderWrapper>
      <OrderIcon />
      <span style={{paddingRight:"7px"}}>سفارش ها</span>
    </OrderWrapper>
  );
};

export default Order;
