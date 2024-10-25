import Flas from "@/public/assets/icon/flas";
import { fetchgetAllCategory } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@reduxjs/toolkit/query";
import { url } from "inspector";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ClassificationWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 0.5%;
  direction: rtl;
  margin: 0 auto;
  flex-wrap: wrap;
  row-gap: 40px;
`;

const ProductItem = styled.div`
  border: 3px solid white;
  background-color: #f7f5f5;
  border-radius: 10px;
  box-shadow: 2px 5px 20px lightgrey;
  margin-left: 20px;
  height: 95px;
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;
const Wrapper = styled.div`
  direction: rtl;
  padding: 4.5%;
`;
const CategoryName = styled.span`
  position: absolute;
  top: 70%;
  right: -5px;
  background-color: white;
  z-index: 1;
  width: 80px;
  height: 30px;
  border-radius: 8px;
  padding-right: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Classification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.item.item);

  useEffect(() => {
    dispatch(fetchgetAllCategory());
  }, [dispatch]);
  return (
    <Wrapper>
      <h3>دسته بندی ها</h3>
      <ClassificationWrapper>
        {data.map((item) => (
          <ProductItem>
            <Image src={item.image} alt="1" width={190} height={100} />
            <CategoryName>
              {item.name}
              <Flas />
            </CategoryName>
          </ProductItem>
        ))}
      </ClassificationWrapper>
    </Wrapper>
  );
};

export default Classification;
