import styled from "styled-components";

export const LaunchDate = styled.div`
  background: ${(props) => props.theme.secondary};
  text-align: center;
  padding: 80px;
  position: relative;
  z-index: 20;
  
  @media (max-width: 425px) {
    padding: 100px 20px;
    margin: 0 auto;
  }
`;