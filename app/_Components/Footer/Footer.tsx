import Miket from "@/public/assets/icon/Miket";
import Image from "next/image";
import React from "react";
import phone from "@/public/assets/Logo/img_app_mockup@2x.png";
import Bazaar from "@/public/assets/icon/Bazaar";
import SibApp from "@/public/assets/icon/SibApp";
import Iapps from "@/public/assets/icon/Iapps";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <p>اپلیکیشن اسنپ‌فود</p>
          <p>
            با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید
            رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را
            جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
          </p>
          <div>
            <p>
              {" "}
              برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید{" "}
            </p>
            <form>
              <div>
                <input placeholder="*********۰۹" type="text" name="cellphone" />
              </div>
              <button>دریافت لینک</button>
            </form>
          </div>
          <div>
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <Iapps/>
              </a>
            </div>
          </div>
        </div>
        <Image src={phone} alt="pic" width={100} height={100} />
      </div>
    </div>
  );
};

export default Footer;
