import styled from "styled-components";

export const Footer = styled.div`
  background: ${(props) => props.theme.footerColor};
  padding: 50px 110px 25px;
  display: flex;
`;

export const FooterLinks = styled.div`
  margin-left: auto;
  display: flex;
`;

export const FooterIconsWrapper = styled.div`
  margin-top: 0;
  margin-right: 15px;
`;