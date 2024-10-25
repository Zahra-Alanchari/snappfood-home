import React from 'react';
import { SearchInput, SearchWrapper } from './search.style';

const Search = () => {
    return (
        <SearchWrapper>
            <SearchInput type="text" placeholder='جست و جو در اسنپ فود' />
        </SearchWrapper>
    );
};

export default Search;