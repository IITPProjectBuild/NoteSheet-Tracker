import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4267b2;
  padding: 10px 20px;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  font-weight: bold;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileIcon = styled.div`
  margin-left: 20px;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo>
      <h1></h1>
    </Logo>
    <NavLinks>
      <NavLink href="/notesheets">MY NOTESHEETS</NavLink>
      <NavLink href="/pending">PENDING</NavLink>
      <NavLink href="#">LINKS</NavLink>
      <NavLink href="#">LINKS</NavLink>
      <ProfileIcon>
        <FaUserCircle size={30} />
      </ProfileIcon>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
