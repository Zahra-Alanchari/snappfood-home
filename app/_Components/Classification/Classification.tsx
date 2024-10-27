import Flas from "@/public/assets/icon/Flas";
import { fetchgetAllCategory } from "@/redux/action";
import { AppDispatch } from "@/redux/store";
import { RootState } from "@/type";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CategoryName,
  ClassificationWrapper,
  ProductItem,
  Wrapper,
} from "./classification.style";

const Classification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.item.item);

  useEffect(() => {
    dispatch(fetchgetAllCategory());
  }, [dispatch]);
  return (
    <Wrapper>
      <p style={{fontSize:"16px", fontWeight:"700"}}>دسته بندی ها</p>
      <ClassificationWrapper>
        {data.map((item) => (
          <ProductItem>
            <Image src={item.image} alt="1" width={179.664} height={95} />
            <CategoryName>
              <p>{item.name}</p>
              <Flas />
            </CategoryName>
          </ProductItem>
        ))}
      </ClassificationWrapper>
    </Wrapper>
  );
};

export default Classification;
