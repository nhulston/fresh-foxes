import styled from "styled-components";

export const About = styled.div`
  max-width: 1040px;
  background: ${props => props.theme.white};
  padding: 100px calc((100vw - 1040px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
`;

export const AboutImageWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 80%;
  overflow: hidden;
  margin: auto auto auto 0;
`;

export const AboutTextWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`;