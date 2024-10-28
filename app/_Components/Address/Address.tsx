import React from "react";
import styled from "styled-components";
import Location from "@/public/assets/icon/Location";
import Drop from "@/public/assets/icon/Drop";

const AddressWrapper = styled.div`
  display: flex;
  /* gap: 2%; */
  align-items: center;
  /* flex-grow: 0.5; */
  padding-right: 43px;
`;

const CurrentLocation = styled.div`
  /* background-color: red; */
  height: 34px;
  margin: 8px;
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
 color: rgb(58, 61, 66);
 font-weight: 700;
 font-size: 14px;
`

const DirectLoc= styled.span`
 color: rgb(137, 138, 140);
 font-weight: 400;
 font-size: 10px;
 line-height: 14px;
`

const Address = () => {
  return (
    <AddressWrapper>
      <Location />
      <CurrentLocation>
        <Name>شرکت </Name>
        <DirectLoc style={{display: "flex",alignItems: "flex-end", gap:"10px"}}>
          تهران زعفرانیه تقاطع فلاحی و مقدس اردبیلی ساختمان اسنپ <Drop />
        </DirectLoc>
      </CurrentLocation>
    </AddressWrapper>
  );
};

export default Address;
