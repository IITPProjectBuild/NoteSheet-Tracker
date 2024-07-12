// pages/new.tsx

import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import NoteEditor from '../components/NoteEditor';

const MainContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  background-color: #e7e7e7;
`;

const NewPage: React.FC = () => (
  <>
    <GlobalStyle />
    <MainContainer>
      <Sidebar />
      <ContentContainer>
        <Header />
        <NoteEditor />
      </ContentContainer>
    </MainContainer>
  </>
);

export default NewPage;
