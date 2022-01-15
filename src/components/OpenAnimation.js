import styled from "styled-components";

export const OpenAnimation = styled.div`
  width: 100%;
  height: 125%;
  background: ${props => props.theme.openAnimation};
  position: fixed;
  z-index: 110;
  animation: moveUp .7s ease-in forwards;

  @keyframes moveUp {
    from { transform: translateY(-25%) }
    to { transform: translateY(-125%) }
  }
`;