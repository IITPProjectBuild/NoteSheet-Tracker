// pages/index.tsx

import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TemplateGrid from '../components/TemplateGrid';

const MainContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  background-color: #e7e7e7;
`;

const Home: React.FC = () => (
  <>
    <GlobalStyle />
    <MainContainer>
      <Sidebar />
      <ContentContainer>
        <Header />
        <TemplateGrid />
      </ContentContainer>
    </MainContainer>
  </>
);

export default Home;
