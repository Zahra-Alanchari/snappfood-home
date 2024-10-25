import React from "react";
import styled from "styled-components";
import Location from "@/public/assets/icon/Location";
import Drop from "@/public/assets/icon/Drop";

const AddressWrapper = styled.div`
  display: flex;
  gap: 2%;
  /* flex-grow: 0.5; */
`;

const Address = () => {
  return (
    <AddressWrapper>
      <Location />
      <span>ادرس: تهران زعفرانیه ساختمان اسنپ</span>
      <Drop />
    </AddressWrapper>
  );
};

export default Address;
