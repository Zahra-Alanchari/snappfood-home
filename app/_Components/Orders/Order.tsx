import React from "react";

import styled from "styled-components";
import OrderIcon from "@/public/assets/icon/OrderIcon";

const OrderWrapper = styled.div`
  display: flex;
  flex-grow: .1;
  margin-right:50px;
`;

const Order = () => {
  return (
    <OrderWrapper>
      <OrderIcon />
      <span style={{paddingRight:"7px"}}>سفارش ها</span>
    </OrderWrapper>
  );
};

export default Order;
