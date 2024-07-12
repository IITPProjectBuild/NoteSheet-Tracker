// components/Sidebar.tsx

import styled from 'styled-components';
import Link from 'next/link';
import { FaHome, FaPlus, FaFolderOpen } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #2e4a84;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const SidebarItem = styled.div`
  width: 100%;
  color: white;
  padding: 10px 20px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #1f3563;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Sidebar: React.FC = () => (
  <SidebarContainer>
    <LogoImage src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna.svg/440px-Indian_Institute_of_Technology%2C_Patna.svg.png" alt="Logo" />
    <Link href="/">
      <SidebarItem>
        <Icon><FaHome /></Icon> HOME
      </SidebarItem>
    </Link>
    <Link href="/new">
      <SidebarItem>
        <Icon><FaPlus /></Icon> NEW
      </SidebarItem>
    </Link>
    <Link href="/open">
      <SidebarItem>
        <Icon><FaFolderOpen /></Icon> OPEN
      </SidebarItem>
    </Link>
  </SidebarContainer>
);

export default Sidebar;
