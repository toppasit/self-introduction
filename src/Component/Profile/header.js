import React from "react";
import styled from "styled-components";
import MyPic from '../../Asset/me.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Trebuchet MS';
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 180px;
  width: 100%;
  padding: 36px 24px 24px 16px;
`

const ImgContainer = styled.div`
  height: 120px;
  width: 120px;
`

const MyImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`

const PersonalInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #F4F4F2;
`

const PersonalInfo = styled.div`
  display: flex;
  justift-content: flex-start;
  align-items: flex-end;
`

const Bold = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 0 8px 0 0;
`

const Normal = styled.div`
  font-size: 16px;
`

const EndLine = styled.div`
  width: 80%;
  background-color: #B6EADA;
  height: 4px;
  border-radius: 8px;
`

export const ProfileHeader = () => {
  return (
    <Container>
      <Header>
        <ImgContainer>
          <MyImage src={MyPic}/>
        </ImgContainer>
        <PersonalInfoContainer>
          <PersonalInfo>
            <Bold>Name: </Bold><Normal>Pasit Tangkongchitr</Normal>
          </PersonalInfo>
          <PersonalInfo>
            <Bold>Age: </Bold><Normal>27</Normal>
          </PersonalInfo>
          <PersonalInfo>
            <Bold>Email: </Bold><Normal>pasit.tangkongchitr@gmail.com</Normal>
          </PersonalInfo>
          <PersonalInfo>
            <Bold>Tel: </Bold><Normal>0625486951</Normal>
          </PersonalInfo>
        </PersonalInfoContainer>
      </Header>
      <EndLine></EndLine>
    </Container>
  )
}

export default ProfileHeader