"use client";
import Category from "./_Components/Category/Category";
import Header from "./_Components/Header/Header";
import Classification from "./_Components/Classification/Classification";
import NewInSnappFood from "./_Components/NewInSnappFood/NewInSnappFood";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/type";
import { useEffect } from "react";
import {
  fetchgetAllFreeDelivery,
  fetchgetAllGiftItem,
  fetchgetAllNewItem,
  fetchgetAllSpecialTaste,
} from "@/redux/action";
import Footer from "./_Components/Footer/Footer";

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  background-color: white;
  width: 100vw;
`;

const BodyWrapper = styled.div`
  padding-top: 24vh;
  background-color: white;
  padding-bottom: 25vh;
`;
const FooterWrapper =styled.div`
  background-color: white;  
`
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.newItem.newItem);
  const giftData = useSelector((state: RootState) => state.giftItem.giftItem);
  const specialTasteData = useSelector(
    (state: RootState) => state.specialTaste.specialTaste
  );
  const freeDeliveryData = useSelector(
    (state: RootState) => state.freeDelivery.freeDelivery
  );

  useEffect(() => {
    dispatch(fetchgetAllNewItem());
    dispatch(fetchgetAllGiftItem());
    dispatch(fetchgetAllSpecialTaste());
    dispatch(fetchgetAllFreeDelivery());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Header />
        <Category />
      </Wrapper>
      <BodyWrapper>
        <Classification />
        <NewInSnappFood data={data} title={"تازه ها در اسنپ فود"} />
        <NewInSnappFood data={giftData.slice(0, 4)} title={"جایزه خرید"} />
        <NewInSnappFood data={giftData.slice(4,8)} title={" مزه های خاص"} />
        <NewInSnappFood data={giftData.slice(8,12)} title={" ارسال رایگان"} />
        <NewInSnappFood data={giftData.slice(0, 4)} title={" یک تجربه جدید"} />
        <NewInSnappFood data={giftData.slice(8,12)} title={"دارای کوپن سفارش اول "} />
        <NewInSnappFood data={giftData.slice(4,8)} title={" فقط در اسنپ فود"} />
      </BodyWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
}
