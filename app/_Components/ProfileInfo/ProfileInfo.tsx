import React from 'react';
import profile from "../../../public/assets/icon/Screen Shot 1403-08-02 at 23.09.08.png"
import Image from 'next/image';

const ProfileInfo = () => {
    return (
        <div>
            <Image src={profile} alt="profile" />
        </div>
    );
};

export default ProfileInfo;