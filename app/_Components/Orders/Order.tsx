import React from "react";

import styled from "styled-components";
import OrderIcon from "@/public/assets/icon/OrderIcon";

const OrderWrapper = styled.div`
  display: flex;
  flex-grow: 0.05;
`;

const Order = () => {
  return (
    <OrderWrapper>
      <OrderIcon />
      <span>سفارش ها</span>
    </OrderWrapper>
  );
};

export default Order;
