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

export const MinorTitle = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-size: 2.2rem;
  margin-bottom: 15px;
`;

export const ItemTitle = styled.p`
  color: ${(props) => props.theme.black};
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
`;

export const ItemContent = styled.p`
  color: ${(props) => props.theme.black};
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
`;

export const RoadmapTitle = styled.h1`
  color: ${(props) => props.theme.white};
  margin-bottom: 20px;
`;

export const PhaseText = styled.h1`
  color: ${(props) => props.theme.white};
  font-weight: 300;
  font-size: 1.5em;
`;

export const RoadmapText = styled.p`
  color: ${(props) => props.theme.white};
  line-height: 40px;
`;

export const LaunchDateTopText = styled.h1`
  color: ${(props) => props.theme.white};
  font-weight: 300;
  margin-bottom: -20px;
`;

export const LaunchDateBottomText = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 6rem;
`;

export const TeamMemberName = styled.h1`
  color: ${(props) => props.theme.black};
  padding-top: 25px;
  font-size: 3rem;
`;

export const TeamMemberRole = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 1.5rem;
`;

export const TeamMemberBio = styled.p`
  color: ${(props) => props.theme.black};
  padding: 30px 100px;
`;