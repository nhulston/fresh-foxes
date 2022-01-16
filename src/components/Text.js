import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
  vertical-align: middle;
  font-size: 5rem;
  line-height: 80px;

  @media (max-width: 1000px) {
    font-size: 4rem;
  }

  @media (max-width: 650px) {
    text-align: center;
  }
`;

export const NavText = styled.div`
  vertical-align: middle;
  text-align: center;
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
  
  @media (max-width: 650px) {
    text-align: center;
  }
`;

export const SubtitleBold = styled.span`
  font-weight: normal;
`;

export const MinorTitle = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-size: 2.2rem;
  margin-bottom: 15px;
  text-align: center;
`;

export const AboutTitle = styled.p`
  color: ${(props) => props.theme.black};
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
`;

export const AboutContent = styled.p`
  color: ${(props) => props.theme.black};
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  
  @media (max-width: 850px) {
    font-size: 2rem;
  }
`;

export const RoadmapTitle = styled.h1`
  color: ${(props) => props.theme.white};
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
`;

export const PhaseText = styled.h1`
  color: ${(props) => props.theme.white};
  font-weight: 300;
  font-size: 1.5em;
  @media (max-width: 900px) {
    font-size: 1.25rem;
  }
`;

export const RoadmapText = styled.p`
  color: ${(props) => props.theme.white};
  line-height: 40px;
  @media (max-width: 900px) {
    font-size: 1rem;
    line-height: 30px;
  }
`;

export const LaunchDateTopText = styled.h1`
  color: ${(props) => props.theme.white};
  font-weight: 300;
`;

export const LaunchDateBottomText = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 6rem;
  line-height: 60px;
  margin-top: 10px;
  margin-bottom: 30px;
  
  @media (max-width: 1090px) {
    font-size: 5rem;
  }
  
  @media (max-width: 950px) {
    font-size: 4rem;
  }
`;

export const TeamMemberName = styled.h1`
  color: ${(props) => props.theme.black};
  padding-top: 25px;
  font-size: 3rem;
  
  @media (max-width: 1025px) {
    font-size: 2rem;
  }
`;

export const TeamMemberRole = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 1.5rem;

  @media (max-width: 1025px) {
    font-size: 1.25rem;
  }
`;

export const TeamMemberBio = styled.p`
  color: ${(props) => props.theme.black};
  padding: 30px 5vw;
`;

export const CopyrightText = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1rem;
`;

export const FooterEmail = styled.a`
  color: ${(props) => props.theme.white};
  text-decoration: underline;
`;