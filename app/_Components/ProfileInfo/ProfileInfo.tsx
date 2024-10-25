import React from "react";
import profile from "../../../public/assets/icon/Screen Shot 1403-08-02 at 23.09.08.png";
import Image from "next/image";
import styled from "styled-components";

const ProfileInfoWrapper = styled.div`
  display: flex;
  /* gap: 9px; */
  flex-grow: 0.1;
`;

const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
      <Image src={profile} alt="profile" width={35} height={30} />
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
