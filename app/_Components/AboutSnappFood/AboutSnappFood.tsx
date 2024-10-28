import Aparat from "@/public/assets/icon/Aparat";
import Instagram from "@/public/assets/icon/Instagram";
import Linkdin from "@/public/assets/icon/Linkdin";
import SnappFood from "@/public/assets/icon/SnappFood";
import Telegram from "@/public/assets/icon/Telegram";
import Twitter from "@/public/assets/icon/Twitter";
import Image from "next/image";
import React from "react";
import senf from "@/public/assets/Logo/senf.png";
import { ContentWrapper, Lgo, Social, SocialLogo, Wrapper } from "./AboutSnappFood.style";

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
