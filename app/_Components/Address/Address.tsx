import Image from "next/image";
import React from "react";
import location from "../../../public/assets/icon/Screen Shot 1403-08-02 at 23.20.38.png";
import flash from "../../../public/assets/icon/Screen Shot 1403-08-02 at 23.31.19.png";
import styled from "styled-components";

const AddressWrapper = styled.div`
  display: flex;
  
  gap: 20%;
    flex-grow: 0.5;
`;

const Address = () => {
  return (
    <AddressWrapper>
      <Image src={location} alt="loc" width={35} height={35} />
      <span>ادرس</span>
      <Image src={flash} alt="loc" width={30} height={30} />
    </AddressWrapper>
  );
};

export default Address;
