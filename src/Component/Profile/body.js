import React from "react";
import styled from "styled-components";

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
  padding: 24px;
  // border: 1px solid #5B8FB9;
`

const MainBody = styled.div`
  height: 100%;
  width: 70vw;
  padding: 24px;
  // border: 1px solid #301E67;
`

export const ProfileBody = () => {
  return (
    <Body>
      <SideBody>Some small detail: Skill, Language</SideBody>
      <MainBody>Some big detail: Education, Job History</MainBody>
    </Body>
  )
}

export default ProfileBody