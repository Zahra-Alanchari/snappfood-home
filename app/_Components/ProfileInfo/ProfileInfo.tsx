import React from "react";
import styled from "styled-components";
import Profile from "@/public/assets/icon/Profile";

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-grow: 0.1;
`;

const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
      <Profile/>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
