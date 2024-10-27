import Miket from "@/public/assets/icon/Miket";
import Image from "next/image";
import React from "react";
import phone from "@/public/assets/Logo/img_app_mockup@2x.png";
import Bazaar from "@/public/assets/icon/Bazaar";
import SibApp from "@/public/assets/icon/SibApp";
import Iapps from "@/public/assets/icon/Iapps";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 4rem;
  background-color: rgb(235, 237, 240);
  border-bottom-right-radius: 7.5rem;
  width: 1295px;
  height: 557px;
  margin: 0 auto 170px auto;
  direction: rtl;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 1;
  flex-wrap: nowrap;
  padding: 0 64px;
  position: relative;
  & img {
    position: absolute;
    top: -50%;
    left: 0;
  }

  & input {
    width: 35vw;
    min-width: 17.8125rem;
    max-width: 50%;
    height: 3rem;
    margin-top: 0.375rem;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    border: 0.0625rem solid rgba(58, 61, 66, 0.12);
    border-radius: 0.375rem;
    box-shadow: rgba(58, 61, 66, 0.06) 0px 1px 0px,
      rgba(0, 0, 0, 0.2) 0px 4px 16px -8px;
    &::placeholder {
      padding-right: 20px;
      font-size: 16px;
    }
  }
  & button {
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    min-width: 6.6875rem;
    width: auto;
    height: 2rem;
    border: 1rem solid rgb(255, 0, 166);
    border-radius: 0.375rem;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 0, 166);
    background-clip: padding-box;
    box-shadow: none;
    font-size: 0.875rem;
    font-weight: 700;
    position: absolute;
    top: 13.5px;
    left: 146px;
  }
`;
const Information = styled.div`
  /* background-color: red; */
  width: 430px;
  display: flex;
  flex-direction: column;
`;
const Sf = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 30px;
  width: auto;
  height: auto;
  padding: 0px;
  margin-top: 0;
  margin-bottom: 40px;
  display: inline-block;
  color: rgb(58, 61, 66);
`;
const SfDescription = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  width: auto;
  height: auto;
  padding: 0px;
  margin: 0px 0px 40px 0;
  display: inline-block;
  color: rgb(83, 86, 92);
  text-align: initial;
`;

const DownLoadLink = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1rem;
  color: rgb(83, 86, 92);
`;
const SocialAddress = styled.div`
  /* background-color: yellow; */
  display: flex;
  gap: 16px;
`;

const Connection = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <Information>
          <Sf>اپلیکیشن اسنپ‌فود</Sf>
          <SfDescription>
            با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید
            رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را
            جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
          </SfDescription>
          <div style={{ marginBottom: "40PX" }}>
            <DownLoadLink>
              {" "}
              برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید{" "}
            </DownLoadLink>
            <form style={{ position: "relative" }}>
              <div>
                <input placeholder="*********۰۹" type="text" name="cellphone" />
              </div>
              <button>دریافت لینک</button>
            </form>
          </div>
          <SocialAddress>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://myket.ir/app/com.zoodfood.android/?referrer=appmetrica_tracking_id%3D820652809379719105%26ym_tracking_id%3D5462979919677334286"
            >
              <Miket />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cafebazaar.ir/app/com.zoodfood.android"
            >
              <Bazaar />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sibapp.com/applications/zoodfood-1"
            >
              <SibApp />
            </a>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <Iapps />
              </a>
            </div>
          </SocialAddress>
        </Information>
        <Image src={phone} alt="pic" width={424} height={636} />
      </FooterWrapper>
    </Wrapper>
  );
};

export default Connection;
