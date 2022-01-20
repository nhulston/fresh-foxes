import styled from "styled-components";

export const HeroWrapper = styled.div`
  margin: 45px auto;
  padding: 0 48px;
  flex-direction: row;
  max-width: 1040px;
  position: relative;
`;

export const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  margin-top: 280px;
  margin-bottom: 110px;
  animation: fadeIn 1.25s ease-in forwards;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(.92) }
    to { opacity: 1; transform: scale(1) }
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    margin-top: 100px;
    display: block;
  }
`;

export const HeroTextWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 650px) {
    grid-area: 1 / 1 / 2 / 2;
    align-items: center;
  }
`;

export const HeroImageWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  width: 80%;
  overflow: hidden;
  margin: auto 0 auto auto;

  @media (max-width: 650px) {
    width: 60%;
    grid-area: 2 / 1 / 3 / 2;
    margin: 30px auto auto;
  }
`;

export const ButtonWrapper = styled.div`
  width: 220px;
  height: 60px;
  position: relative;
  margin-top: 30px;
  transition: .4s ease;
  
  &:hover {
    transform: scale(1.07);
  }
`;

export const Button = styled.button`
  color: ${(props) => props.theme.white};
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, ${props => props.theme.buttonGrad1}, ${props => props.theme.buttonGrad2});
  transition: .4s ease;
  font-size: 18px;
  font-weight: 400;
  
  &:active {
    opacity: 0.75;
  }
`;

export const Spacer = styled.div`
  aspect-ratio: 960/150;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("/layered-waves-haikei.svg");
  position: relative;
  z-index: -10;
  animation: fadeUp 1s .5s ease-out forwards;
  opacity: 0;

  @keyframes fadeUp {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;