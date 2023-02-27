import React from "react";
import styled from "styled-components";
import MyPic from '../../Asset/me.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Trebuchet MS';
  padding: 96px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  padding: 36px 24px 24px 16px;
  background-color: #001f33;
  border-radius: 8px;
  box-shadow: 0 0 16px 4px #869ba9;
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
  flex-wrap: wrap;
  word-break: break-word;
  font-size: 24px;
  width: 100%;
  color: #B6EADA;
`

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  word-break: break-word;
  letter-spacing: 8px;
  width: 100%;
  font-size: 36px;
  margin: 36px 0 18px 0;
`

const PersonalInfo = styled.div`
  display: flex;
  text-align: start;
  flex-wrap: wrap;
  width: 100%;
  margin: 18px;
`

const EndLine = styled.div`
  width: ${props => props.width};
  margin: ${props => props.margin};
  background-color: #B6EADA;
  height: 1px;
  border-radius: 8px;
  box-shadow: 0 0 12px #869ba9;
`

export const ProfileHeader = () => {
  return (
    <Container>
      <Header>
        <ImgContainer>
          <MyImage src={MyPic}/>
        </ImgContainer>
        <PersonalInfoContainer>
          <NameContainer>
            PASIT&emsp;TANGKONGCHITR
          </NameContainer>
          <EndLine margin={'24px 0'} width={'90%'}/>
          <PersonalInfo>
            AGE:&emsp;27
          </PersonalInfo>
          <PersonalInfo>
            EMAIL:&emsp;pasit.tangkongchitr@gmail.com
          </PersonalInfo>
          <PersonalInfo>
            TEL:&emsp;0625486951
          </PersonalInfo>
        </PersonalInfoContainer>
      </Header>
      <EndLine margin={'48px 0 0 0'} width={'80%'}/>
    </Container>
  )
}

export default ProfileHeader