import React from 'react';
import styled from 'styled-components';


const cities = [
    { id: 1, name: "تهران" },
    { id: 2, name: "مشهد" },
    { id: 3, name: "اصفهان" },
    { id: 4, name: "کرج" },
    { id: 5, name: "شیراز" },
    { id: 6, name: "تبریز" },
    { id: 7, name: "قم" },
    { id: 8, name: "اهواز" },
    { id: 9, name: "کرمان" },
    { id: 10, name: "رشت" },
    { id: 11, name: "یزد" },
    { id: 12, name: "قزوین" },
    { id: 13, name: "ارومیه" },
    { id: 14, name: "اردبیل" },
    { id: 15, name: "ساری" },
    { id: 16, name: "گرگان" },
    { id: 17, name: "بوشهر" },
    { id: 18, name: "همدان" },
    { id: 19, name: "کرمانشاه" },
    { id: 20, name: "زنجان" },
    { id: 21, name: "بندرعباس" },
    { id: 22, name: "شاهین شهر" },
    { id: 23, name: "اراک" },
    { id: 24, name: "کاشان" },
    { id: 25, name: "بجنورد" },
    { id: 26, name: "بابل" },
    { id: 27, name: "نیشابور" },
    { id: 28, name: "بیرجند" },
    { id: 29, name: "سبزوار" },
    { id: 30, name: "یاسوج" },
    { id: 31, name: "بابلسر" },
    { id: 32, name: "خرم آباد" },
    { id: 33, name: "اسلامشهر" },
    { id: 34, name: "سمنان" },
    { id: 35, name: "قائم شهر" },
    { id: 36, name: "مراغه" },
    { id: 37, name: "بندر انزلی" },
    { id: 38, name: "سنندج" },
    { id: 39, name: "شاهرود" },
    { id: 40, name: "لاهیجان" },
    { id: 41, name: "مرودشت" },
    { id: 42, name: "دزفول" },
    { id: 43, name: "ساوه" },
    { id: 44, name: "بروجرد" },
    { id: 45, name: "پردیس" },
    { id: 46, name: "آمل" },
    { id: 47, name: "شهرکرد" },
    { id: 48, name: "سپاهان شهر" },
    { id: 49, name: "مرند" },
    { id: 50, name: "آبادان" },
    { id: 51, name: "زاهدان" },
    { id: 52, name: "پرند" },
    { id: 53, name: "کیش" },
    { id: 54, name: "تربت حیدریه" },
    { id: 55, name: "ورامین" },
    { id: 56, name: "پاکدشت" },
    { id: 57, name: "رباط کریم" },
    { id: 58, name: "نجف آباد" },
    { id: 59, name: "خمینی شهر" },
    { id: 60, name: "گنبد کاووس" },
    { id: 61, name: "قوچان" },
    { id: 62, name: "لواسان" },
    { id: 63, name: "اندیمشک" },
    { id: 64, name: "فولادشهر" },
    { id: 65, name: "نور" },
    { id: 66, name: "نوشهر" },
    { id: 67, name: "ایلام" },
    { id: 68, name: "محمود آباد" },
    { id: 69, name: "اندیشه" },
    { id: 70, name: "کازرون" },
    { id: 71, name: "بهارستان" },
    { id: 72, name: "رامسر" },
    { id: 73, name: "بومهن" },
    { id: 74, name: "قشم" },
    { id: 75, name: "نسیم شهر" },
    { id: 76, name: "شهریار" },
    { id: 77, name: "شهر قدس" },
    { id: 78, name: "شهر ری" },
    { id: 79, name: "بهشهر" },
    { id: 80, name: "خوی" },
    { id: 81, name: "سهند" },
    { id: 82, name: "لنگرود" },
    { id: 83, name: "رویان" },
    { id: 84, name: "چالوس" },
    { id: 85, name: "اردکان یزد" },
    { id: 86, name: "ایزدشهر" },
    { id: 87, name: "دماوند" },
    { id: 88, name: "تنکابن" },
    { id: 89, name: "فریدونکنار" },
    { id: 90, name: "سرخ رود" },
    { id: 91, name: "ملایر" },
    { id: 92, name: "قرچک" },
    { id: 93, name: "فومن" },
    { id: 94, name: "هشتگرد" },
    { id: 95, name: "شهرضا" },
    { id: 96, name: "سلمان شهر" },
    { id: 97, name: "تربت جام" },
    { id: 98, name: "باقر شهر" },
    { id: 99, name: "چابهار" },
    { id: 100, name: "کلارآباد" },
    { id: 101, name: "ملارد" },
    { id: 102, name: "خرمشهر" },
    { id: 103, name: "زرین شهر" },
    { id: 104, name: "میاندوآب" },
    { id: 105, name: "مبارکه" },
    { id: 106, name: "چهارمحال بختیاری" },
    { id: 107, name: "زابل" },
    { id: 108, name: "لار" },
    { id: 109, name: "نکا" },
    { id: 110, name: "آران بیدگل" },
    { id: 111, name: "میبد" },
    { id: 112, name: "بم" },
    { id: 113, name: "مارلیک" },
    { id: 114, name: "بروجن" },
    { id: 115, name: "گرمسار" },
    { id: 116, name: "سیرجان" },
    { id: 117, name: "رودسر" },
    { id: 118, name: "صومعه سرا" },
    { id: 119, name: "تفرش" },
    { id: 120, name: "آستانه اشرفیه" },
    { id: 121, name: "عباس آباد" },
    { id: 122, name: "صدرا" },
    { id: 123, name: "طبس" },
    { id: 124, name: "فلاورجان" },
    { id: 125, name: "سرعین" },
    { id: 126, name: "رودهن" },
    { id: 127, name: "اسکو" },
    { id: 128, name: "رامهرمز" },
    { id: 129, name: "نقده" },
    { id: 130, name: "جاجرود" },
    { id: 131, name: "رفسنجان" },
    { id: 132, name: "نمک آبرود" },
    { id: 133, name: "لرستان" },
    { id: 134, name: "خمین" },
    { id: 135, name: "ویلاشهر" },
    { id: 136, name: "آبیک" }
  ];
  
const Wrapper = styled.div`
    background-color:  rgb(255, 255, 255);
    direction: rtl;
    padding: 32px;
    border-top: 1px solid  rgb(235, 237, 240);
`

const CitiesWrapper= styled.div`
    /* background-color: blue; */
    padding: 32px;
    display: flex;
    flex-direction: column;
    height: 309px;
    flex-wrap: wrap;
    color: rgb(166, 170, 173);
    font-size: 10px;
    line-height: 27px;

`
const Cities = () => {
    return (
        <Wrapper>
            <h2>اسنپ فود در شهرهای ایران</h2> 
            <CitiesWrapper>
                {cities.map(city => (
                    <span key={city.id}>{city.name}</span>
                ))}
            </CitiesWrapper>
        </Wrapper>
    );
};

export default Cities;