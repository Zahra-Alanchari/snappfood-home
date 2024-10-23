import React from 'react';
import Search from '../Search/Search';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Order from '../Orders/Order';
import SfLogo from '../SfLogo/SfLogo';
import Address from '../Address/Address';

const Header = () => {
    return (
        <div>
            <Order/>
            <Address/>
            <ProfileInfo/>
            <Search/>
            <SfLogo/>
        </div>
    );
};

export default Header;