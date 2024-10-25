import Image from 'next/image';
import React from 'react';
import logo from "../../../public/assets/Logo/Screenshot 2024-03-19 at 3.59.12 PM.png"

const SfLogo = () => {
    return (
        <div>
            <Image src={logo} alt="logo" width={100} height={50}/>
        </div>
    );
};

export default SfLogo;