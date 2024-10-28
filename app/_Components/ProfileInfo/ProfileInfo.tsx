import React from "react";
import styled from "styled-components";
import Profile from "@/public/assets/icon/Profile";
import { ProfileInfoWrapper } from "./profileInfo.style";



const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
      <Profile/>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
