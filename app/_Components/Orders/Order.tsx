import Image from "next/image";
import React from "react";
import order from "../../../public/assets/icon/Screen Shot 1403-08-02 at 23.05.37.png";
import styled from "styled-components";

const OrderWrapper = styled.div`
  display: flex;
  flex-grow: 0.05;
`;

const Order = () => {
  return (
    <OrderWrapper>
      <Image src={order} alt="order" width={35} height={30} />
      <span>سفارش ها</span>
    </OrderWrapper>
  );
};

export default Order;
