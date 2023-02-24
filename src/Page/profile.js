import React from "react";
import styled from 'styled-components'
import ProfileHeader from "../Component/Profile/header";
import ProfileBody from "../Component/Profile/body";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

export const ProfilePage = () => {
  return (
    <Container>
      <ProfileHeader/>
      <ProfileBody/>
    </Container>
  )
}

export default ProfilePage