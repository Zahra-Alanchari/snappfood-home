import React from "react";
import {
  SearchIconWrapper,
  SearchInput,
  SearchWrapper,
  Wrapper,
} from "./search.style";
import SearchIcon from "@/public/assets/icon/SearchIcon";

const Search = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput type="text" placeholder="جست و جو در اسنپ فود" />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchWrapper>
    </Wrapper>
  );
};

export default Search;
