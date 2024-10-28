import React from "react";
import Location from "@/public/assets/icon/Location";
import Drop from "@/public/assets/icon/Drop";
import { AddressWrapper, CurrentLocation, DirectLoc, Name } from "./address.style";



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
