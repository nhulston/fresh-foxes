import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 30px 0;
  //margin: 0 300px;
  //max-width: 1064px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  transform: translateY(-100px);
  animation: moveDown .45s .6s ease-out forwards;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.backgroundOpacity};
  z-index: 100;

  @keyframes moveDown {
    from { transform: translateY(-100px) }
    to { transform: translateY(0) }
  }
`;

export const ItemsWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 100px;
`;

export const NavSocial = styled.a`
  transition: 0.3s ease;
  color: ${(props) => props.theme.white};
  border-radius: 100%;
  padding: 8px 8px 2px 8px;
  margin: 0 10px;
  font-size: 1.5rem;
  
  &:hover {
    background-color: #ffffff33;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  padding-left: 100px;
`;