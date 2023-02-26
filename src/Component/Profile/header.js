import React from "react";
import styled from "styled-components";
import MyPic from '../../Asset/me.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
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
  color: #B6EADA;
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
  border-bottom: 1px solid #B6EADA;
`

const Wave = styled.div`
  position: relative;
  background-color: #3bb78f;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 215px;
    background: url(wave.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
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