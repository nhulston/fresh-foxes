import styled from "styled-components";

export const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  margin: 200px 0 0;
  animation: fadeIn 1.25s ease-in forwards;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(.92) }
    to { opacity: 1; transform: scale(1) }
  }
`;

export const HeroTextWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroImageWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  width: 80%;
  overflow: hidden;
  margin-left: auto;
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
  background: linear-gradient(270deg, ${props => props.theme.secondaryGradient}, ${props => props.theme.secondary});
  transition: .4s ease;
  font-size: 22px;
  font-weight: 400;
  
  &:active {
    opacity: 0.75;
  }
`;

let multipleBoxShadow = (n) => {
    let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;

    for (let i = 1; i < n; i++) {
        value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
    }

    console.log(value);
    return value;
};

export const StarBase = styled.div`
  background: transparent;
  position: relative;
  z-index: -1000;

  @keyframes animStar {
    from { transform: translateY(0px) }
    to { transform: translateY(-2000px) }
  }
`;

export const Stars1 = styled(StarBase)`
  width: 1px;
  height: 1px;
  box-shadow: ${multipleBoxShadow(700)};
  animation: animStar 50s linear infinite;
`;

export const Stars2 = styled(StarBase)`
  width: 2px;
  height: 2px;
  box-shadow: ${multipleBoxShadow(200)};
  animation: animStar 100s linear infinite;
`;

export const Stars3 = styled(StarBase)`
  width: 3px;
  height: 3px;
  box-shadow: ${multipleBoxShadow(100)};
  animation: animStar 150s linear infinite;
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
  opacity: 0;\

  @keyframes fadeUp {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;