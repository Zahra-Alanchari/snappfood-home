import Aparat from "@/public/assets/icon/Aparat";
import Instagram from "@/public/assets/icon/Instagram";
import Linkdin from "@/public/assets/icon/Linkdin";
import SnappFood from "@/public/assets/icon/SnappFood";
import Telegram from "@/public/assets/icon/Telegram";
import Twitter from "@/public/assets/icon/Twitter";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import senf from "@/public/assets/Logo/senf.png";
import logo from "@/public/assets/Logo/logo.png";
const Wrapper = styled.div`
  background-color: rgb(249, 250, 251);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  direction: rtl;
  justify-content: space-between;
  padding: 57px 57px 0 57px;
  /* flex-direction: column-reverse; */
`;

const Social = styled.div`
  flex-basis: auto;
  /* flex-grow: 0.1; */
  display: flex;
  flex-direction: column;
  & button{
    background-color: rgb(255, 255, 255);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    box-shadow:(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px;
    border: 0;
    
  }
`;
const Lgo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & p{
    margin: 0 0 5px 0;
    padding: 0;
  }
`;
const SocialLogo = styled.div`
    /* background-color: red; */
    gap: 20px;
    padding-right: 85px;
    display: flex;
    padding-top: 20px;
`
const AboutSnappFood = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Social>
          <Lgo>
            <div>
              <SnappFood />
            </div>
            <div>
              <p style={{fontSize:"18px", fontWeight:"700", color:"rgb(255, 0, 166)"}}>اسنپ‌فود</p>
              <p style={{fontSize:"12px", fontWeight:"400", color:"rgb(83, 86, 92)"}}>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
            </div>
          </Lgo>
          <SocialLogo>
            <div>
              <button>
                <Twitter />
              </button>
            </div>
            <div>
              <button>
                <Telegram />
              </button>
            </div>
            <div>
              <button>
                <Linkdin />
              </button>
            </div>
            <div>
              <button>
                <Instagram />
              </button>
            </div>
            <div>
              <button>
                <Aparat />
              </button>
            </div>
          </SocialLogo>
        </Social>
        <div>
          <div>
            <p>درباره اسنپ‌فود</p>
            <p>فرصت‌های شغلی</p>
            <p>وبلاگ</p>
            <p>قوانین سایت</p>
            <p>حریم خصوصی</p>
            <p>ثبت نام فروشندگان</p>
          </div>
        </div>
        <div>
          <div>
            <p>تماس با اسنپ‌فود</p>
            <p>پرسش‌های متداول</p>
            <p>ثبت شکایات</p>
            <p>اپلیکیشن موبایل</p>
          </div>
        </div>
        <div>
          <Image src={senf} alt="pic" width={71} height={75} />
          {/* <Image src={logo} alt="pic" width={200} height={200}/> */}
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AboutSnappFood;
