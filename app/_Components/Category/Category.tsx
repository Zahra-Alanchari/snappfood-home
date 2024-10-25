import { fetchgetAllCategory, fetchgetAllProduct } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@reduxjs/toolkit/query";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  padding: 1%;
  direction: rtl;
`;
const ProductItem = styled.div`
  border: 1px solid #dedede;
  background-color: #f7f5f5;
  border-radius: 10px;
  margin-left: 20px;
  height: 140px;
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Category = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.product.product);
  const data2 = useSelector((state: RootState) => state.item.item);
  console.log(data2, "data2");

  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);

  return (
    <ProductWrapper>
      {data.map((item) => (
        <ProductItem>
          <Image src={item.image} alt="1" width={100} height={100} />
          <span>{item.name}</span>
        </ProductItem>
      ))}
       
    </ProductWrapper>
  );
};

export default Category;
