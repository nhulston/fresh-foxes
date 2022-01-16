import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 25px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  transform: translateY(-100px);
  animation: moveDown .45s .6s ease-out forwards;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.navbarColor};
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
  
  @media (max-width: 900px) {
    padding-right: 25px;
  }
  
  @media (max-width: 824px) {
    grid-area: 1 / 1 / 2 / 3;
    justify-content: space-evenly;
  }
`;

export const HideItemsOnSmall = styled.div`
  display: flex;
  
  @media (max-width: 600px) {
    display: none;
  }
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

  @media (max-width: 900px) {
    padding-left: 25px;
  }
  
  @media (max-width: 825px) {
    display: none;
  }
`;