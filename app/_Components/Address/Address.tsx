import Image from 'next/image';
import React from 'react';
import location from "../../../public/assets/icon/Screen Shot 1403-08-02 at 23.20.38.png"
import flash from "../../../public/assets/icon/Screen Shot 1403-08-02 at 23.31.19.png"

const Address = () => {
    return (
        <div>
            <Image src={location} alt="loc" />
            <span>ادرس</span>
            <Image src={flash} alt="loc" />
        </div>
    );
};

export default Address;