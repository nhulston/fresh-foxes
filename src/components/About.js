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
  display: flex;
  width: 80%;
  border-radius: 15px;
  overflow: hidden;
  margin-right: auto;
`;

export const AboutTextWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;