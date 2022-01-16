import styled from "styled-components";

export const Team = styled.div`
  background: ${(props) => props.theme.white};
  text-align: center;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
`;

export const TeamMember = styled.div`
  background: ${(props) => props.theme.gray};
  border-radius: 50px;
  width: 80%;
  margin: 0 auto;
`;

export const TeamImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 40px auto 0;
`;

export const TeamLinkWrapper = styled.div`
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.15);
  }
  margin-bottom: 20px;
`;

export const TeamLink = styled.a`
  color: ${(props) => props.theme.black};
  border-radius: 50%;
  padding: 14px 14px 6px 14px;
  font-size: 2rem;
  transition: 0.3s ease;
  &:hover {
    background-color: #00000020;
    cursor: pointer;
  }
`;