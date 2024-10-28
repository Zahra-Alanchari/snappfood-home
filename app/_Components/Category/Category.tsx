import { fetchgetAllProduct } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/type";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextButton, ProductItem, ProductWrapper } from "./category.style";
import Flas from "@/public/assets/icon/Flas";



const Category = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.product.product);
  useEffect(() => {
    dispatch(fetchgetAllProduct());
  }, [dispatch]);

  return (
    <ProductWrapper>
      {data.map((item) => (
        <ProductItem>
          <Image src={item.image} alt="pic" width={102} height={102} />
          <span>{item.name}</span>
        </ProductItem>
      ))}
      <NextButton><Flas/></NextButton>
    </ProductWrapper>
  );
};

export default Category;
