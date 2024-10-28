import ExpressDelivery from "@/public/assets/icon/ExpressDelivery";
import GreenIcon from "@/public/assets/icon/GreenIcon";
import OwnDelivery from "@/public/assets/icon/OwnDelivery";
import Star from "@/public/assets/icon/Star";
import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { RootState } from "@reduxjs/toolkit/query";
import { Product } from "@/type";

const Wrapper = styled.div`
  direction: rtl;
  padding: 0 4.5%;
`;

const NewInSnappFoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 15px;
  height: 373px;
`;

const NewItem = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(58, 61, 66, 0.06);
  width: 315px;
  overflow: hidden;
  border-radius: 8px;
  height: 373px;
  position: relative;
  cursor: pointer;
  box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
    rgba(0, 0, 0, 0.05) 0px 2px 8px -2px;
  &:hover {
    box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
      rgba(0, 0, 0, 0.3) 0px 8px 32px -16px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 15px;
  & h2 {
    font-size: 18px;
    font-weight: 700;
    color: rgb(58, 61, 66);
  }
`;

const ProfileImage = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 12px;
  overflow: hidden;
  height: 80px;
  border: 4px solid white;
  box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
    rgba(0, 0, 0, 0.3) 0px 8px 32px -16px;
`;

const InfoStar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

const Delivery = styled.div`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeliveryWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
    rgba(0, 0, 0, 0.05) 0px 2px 8px -2px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px;
  border-radius: 72px;
`;

const Title = styled.div`
display: flex;
justify-content: space-between;
  & p{
    font-size: 24px;
    font-weight:bolder;
  
  }
`


const NewInSnappFood: React.FC<Product> = ({ data, title }) => {

  return (
    <Wrapper>
      <Title>
        <p > {title}</p>
        <p style={{color:"rgb(0, 184, 98);"}}>مشاهده همه <GreenIcon/></p>
      </Title>
      <NewInSnappFoodWrapper>
        {data.slice(0, 4).map((item) => (
          <NewItem key={item.id}>
            <div>
              <Image
                src={item.headerImage}
                width={315}
                height={155}
                alt="pic"
              />
              <ProfileImage>
                <Image src={item.image} width={80} height={80} alt="pic" />
              </ProfileImage>
            </div>
            <Info>
              <h2>{item.name}</h2>
              <InfoStar>
                {" "}
                <Star />
                <span>{item.star ? item.star : "جدید"}</span>
                {item.score && (
                  <span
                    style={{ fontSize: "12px", color: "rgb(166, 170, 173)" }}
                  >
                    ( {item.score} )
                  </span>
                )}
              </InfoStar>
              <h3
                style={{
                  color: "rgb(166, 170, 173)",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                {item.category}
              </h3>
            </Info>
            <Delivery>
              {item.express === false ? (
                <DeliveryWrapper>
                  {" "}
                  <OwnDelivery />
                  <div>پیک فروشنده</div>
                  <div>{item.deliveryPrice}</div>
                </DeliveryWrapper>
              ) : (
                <DeliveryWrapper>
                  {" "}
                  <ExpressDelivery />
                  <div>ارسال اکسپرس</div>
                  <div>{item.deliveryPrice}</div>
                </DeliveryWrapper>
              )}
            </Delivery>
          </NewItem>
        ))}
      </NewInSnappFoodWrapper>
    </Wrapper>
  );
};

export default NewInSnappFood;
