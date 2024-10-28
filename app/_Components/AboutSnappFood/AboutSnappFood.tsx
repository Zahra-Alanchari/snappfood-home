import Aparat from "@/public/assets/icon/Aparat";
import Instagram from "@/public/assets/icon/Instagram";
import Linkdin from "@/public/assets/icon/Linkdin";
import SnappFood from "@/public/assets/icon/SnappFood";
import Telegram from "@/public/assets/icon/Telegram";
import Twitter from "@/public/assets/icon/Twitter";
import Image from "next/image";
import React from "react";
import senf from "@/public/assets/Logo/senf.png";

import styled from "styled-components";

 const Wrapper = styled.div`
  background-color: rgb(249, 250, 251);
`;

 const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  direction: rtl;
  justify-content: space-between;
  padding: 42px 40px 41px 40px;
`;

 const Social = styled.div`
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  & button {
    background-color: rgb(255, 255, 255);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    box-shadow: (58, 61, 66, 0.06) 0px 1px 0px,
      rgba(0, 0, 0, 0.2) 0px 4px 16px -8px;
    border: 0;
  }
`;
 const Lgo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & p {
    margin: 0 0 5px 0;
    padding: 0;
  }
`;
 const SocialLogo = styled.div`
  gap: 20px;
  padding-right: 85px;
  display: flex;
  padding-top: 20px;
`;
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
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "rgb(255, 0, 166)",
                }}
              >
                اسنپ‌فود
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "rgb(83, 86, 92)",
                }}
              >
                تجربه سفارش غذا، از زودفود تا اسنپ‌فود
              </p>
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
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              درباره اسنپ‌فود
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              فرصت‌های شغلی
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              وبلاگ
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              قوانین سایت
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              حریم خصوصی
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              ثبت نام فروشندگان
            </p>
          </div>
        </div>
        <div>
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              تماس با اسنپ‌فود
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              پرسش‌های متداول
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              ثبت شکایات
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "rgb(83, 86, 92)",
              }}
            >
              اپلیکیشن موبایل
            </p>
          </div>
        </div>
        <div>
          <Image src={senf} alt="pic" width={71} height={75} />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AboutSnappFood;
