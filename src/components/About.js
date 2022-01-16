import styled from "styled-components";

export const About = styled.div`
  max-width: 1040px;
  background: ${props => props.theme.white};
  padding: 100px calc((100vw - 1000px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  
  @media (max-width: 705px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutImageWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 80%;
  overflow: hidden;
  margin: auto auto auto 20px;
  
  @media (max-width: 705px) {
    width: 40%;
    margin: auto auto 50px;
  }
`;

export const AboutTextWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  
  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`;