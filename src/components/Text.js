import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
  vertical-align: middle;
  font-size: 5rem;
`;

export const NavText = styled.div`
  vertical-align: middle;
  color: ${(props) => props.theme.white};
  transition: 0.4s ease;
  margin: 0 16px;
  opacity: 0.85;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.white};
  font-weight: 300;
  font-size: 1.75rem;
  margin-top: 14px;
`;

export const SubtitleBold = styled.span`
  font-weight: normal;
`;

export const MinorTitle = styled.h2`
  color: ${(props) => props.theme.secondary};
  font-size: 2.2rem;
`;

export const Body = styled.p`
  color: ${(props) => props.theme.black};
  font-weight: 300;
  font-size: 1.75rem;
  text-align: center;
  margin-top: 10px;
`;