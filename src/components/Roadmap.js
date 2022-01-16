import styled from "styled-components";

export const Roadmap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  background: ${(props) => props.theme.black};
  padding: 100px;
  position: relative;
  z-index: 10;
  
  @media (max-width: 1350px) {
    padding: 100px 50px 100px;
  }
  
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RoadmapItem = styled.div`
  text-align: center;
  
  @media (max-width: 900px) {
    margin-bottom: 40px;
  }
`;

export const RoadmapItem1 = styled(RoadmapItem)`
  @media (max-width: 1250px) {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const RoadmapItem2 = styled(RoadmapItem)`
  @media (max-width: 1250px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`;

export const RoadmapItem3 = styled(RoadmapItem)`
  @media (max-width: 1250px) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

export const RoadmapImageWrapper = styled.div`
  height: 15vw;
  width: 15vw;
  overflow: hidden;
  margin: 0 auto 40px;
  border-radius: 50%;

  @media (max-width: 900px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 500px) {
    height: 125px;
    width: 125px;
  }
`;