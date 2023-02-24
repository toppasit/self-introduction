import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

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

const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`

const SideBody = styled.div`
  height: 100%;
  width: 30vw;
  border: 1px solid #5B8FB9;
`

const MainBody = styled.div`
  height: 100%;
  width: 70vw;
  border: 1px solid #301E67;
`

export const ProfilePage = () => {
  return (
    <Container>
      <Header>
        <ImgContainer>img</ImgContainer>
        <div>Personal detail: Name Contact Age</div>
      </Header>
      <Body>
        <SideBody>Some small detail: Skill, Language</SideBody>
        <MainBody>Some big detail: Education, Job History</MainBody>
      </Body>
    </Container>
  )
}

export default ProfilePage