import Login from "@/public/assets/icon/Login";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import pic from "@/public/assets/Logo/vendor_pic.png";
import { BusnessWrapper, Description, Question, Wrapper } from "./bussinesOwner.style";



const BussinesOwner = () => {
  return (
    <Wrapper>
      <BusnessWrapper>
        <div>
          <Question>صاحب کسب و کار هستید؟</Question>
          <Description>
            با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.
          </Description>
          <a
            target="_blank"
            href="https://snappfood.ir/campaign/food-registration/"
          >
            <button>
              <Login />
              <span>ثبت نام فروشندگان</span>
            </button>
          </a>
        </div>
        <div>
          <Image src={pic} alt="pic" width={351} height={331} />
        </div>
      </BusnessWrapper>
    </Wrapper>
  );
};

export default BussinesOwner;
