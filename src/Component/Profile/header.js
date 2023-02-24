import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 100%;
  padding: 24px;
  border: 1px solid #B6EADA;
`

const ImgContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border: 1px solid yellow;
`

export const ProfileHeader = () => {
  return (
    <Header>
      <ImgContainer>img</ImgContainer>
      <div>Personal detail: Name Contact Age</div>
    </Header>
  )
}

export default ProfileHeader