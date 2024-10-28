import ExpressDelivery from '@/public/assets/icon/ExpressDelivery';
import GreenIcon from '@/public/assets/icon/GreenIcon';
import OwnDelivery from '@/public/assets/icon/OwnDelivery';
import Star from '@/public/assets/icon/Star';
import { Product } from '@/type';
import Image from 'next/image';
import React from 'react';
// import styled from 'styled-components';
import { Delivery, DeliveryWrapper, Info, InfoStar, NewInSnappFoodWrapper, NewItem, ProfileImage, Title, Wrapper } from './cart.style';





const Carts: React.FC<Product> = ({data, title}) => {
    return (
        <Wrapper>
      <Title>
        <p > {title}</p>
        <p style={{color:"rgb(0, 184, 98);"}}>مشاهده همه <GreenIcon/></p>
      </Title>
      <NewInSnappFoodWrapper>
        {data.map((item) => (
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

export default Carts;