import Login from "@/public/assets/icon/Login";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import pic from "@/public/assets/Logo/vendor_pic.png";

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 4rem 0 4rem;
  background-color: rgb(249, 250, 251);
  border-radius: 2rem;
  width: 1295px;
  height: 331px;
  margin: 0rem auto 0 auto;
  direction: rtl;
`;
const BusnessWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  & img {
    position: absolute;
    top: -100px;
    left: 10px;
  }
  & a{
    text-decoration: none;
  }
  & button {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: 150ms ease-out;
    min-width: 6.5rem;
    width: auto;
    height: 3rem;
    border: 0 ;
    border-radius: 0.375rem;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 0, 166);
    font-size: 1.125rem;
    box-shadow: none;
    font-weight: 700;
    
  }
`;

const Question = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 2rem;
  color: rgb(58, 61, 66);
  margin-bottom: 40px;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 2rem;
  color: rgb(58, 61, 66);
  margin-bottom: 40px;
`;

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
