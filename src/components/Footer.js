import styled from "styled-components";

export const Footer = styled.div`
  background: ${(props) => props.theme.footerColor};
  padding: 50px 110px 25px;
  display: flex;
  
  @media (max-width: 720px) {
    padding: 50px 25px 25px;
  }

  @media (max-width: 545px) {
    flex-direction: column;
  }
`;

export const FooterLinks = styled.div`
  margin-left: auto;
  display: flex;
  
  @media (max-width: 545px) {
    margin-left: 0;
  }
`;

export const FooterIconsWrapper = styled.div`
  margin: auto 15px auto 0;
  display: flex;
  
`;

export const FooterHideOnSmallScreen = styled.div`
  @media (max-width: 545px) {
    display: none;
  }
`;