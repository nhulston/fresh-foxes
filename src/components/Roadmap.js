import styled from "styled-components";

export const Roadmap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  background: ${(props) => props.theme.black};
  padding: 100px;
  position: relative;
  z-index: 10;
`;

export const RoadmapItem = styled.div`
    text-align: center;
`;

export const RoadmapImageWrapper = styled.div`
  height: 15vw;
  width: 15vw;
  overflow: hidden;
  margin: 0 auto 40px;
  border-radius: 50%;
`;