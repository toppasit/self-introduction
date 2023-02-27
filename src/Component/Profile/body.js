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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20vw;
  padding: 24px;
  border: 1px solid #5B8FB9;
`

const SkillContainer = styled.div`

`

const MainBody = styled.div`
  height: 100%;
  width: 80vw;
  padding: 24px;
  border: 1px solid #301E67;
`

export const ProfileBody = () => {
  return (
    <Body>
      <SideBody>
        <SkillContainer>Skill</SkillContainer>
        <div>Language</div>
      </SideBody>
      <MainBody>Some big detail: Education, Job History</MainBody>
    </Body>
  )
}

export default ProfileBody