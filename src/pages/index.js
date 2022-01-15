import {LogoWrapper, Navbar, ItemsWrapper, NavSocial} from '../components/Navbar';
import {OpenAnimation} from "../components/OpenAnimation";
import {Title, NavText, Subtitle, SubtitleBold, MinorTitle, Body} from "../components/Text";
import {Section} from "../components/Section";
import {
    Button,
    ButtonWrapper,
    Hero,
    HeroImageWrapper,
    HeroTextWrapper,
    Spacer,
    Stars1,
    Stars2,
    Stars3,
} from "../components/Hero";
import {BsDiscord, BsTwitter} from "react-icons/bs";
import Link from 'next/link';
import Image from "next/image";
import heroImage from "/public/39.png";
import {About, AboutImageWrapper, AboutTextWrapper} from "../components/About";
import {useEffect, useState} from "react";

export default function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = document.documentElement.scrollTop;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const move = { transform: `scaleY(${1.67 + Math.sin(scrollPosition / 300) / 1.5})` };
    const borderRadius = { borderRadius: `${scrollPosition / 1.5 + 15}px` };

    return (
        <div>
            <OpenAnimation/>
            <Stars1/>
            <Stars2/>
            <Stars3/>
            <Navbar>
              <LogoWrapper>
                  <Link href="/" passHref>
                      <NavText>FRESH FOXES</NavText>
                  </Link>
              </LogoWrapper>
              <ItemsWrapper>
                  <Link href="#about" passHref>
                      <NavText>ABOUT</NavText>
                  </Link>
                  <Link href="#roadmap" passHref>
                      <NavText>ROADMAP</NavText>
                  </Link>
                  <Link href="#team" passHref>
                      <NavText>TEAM</NavText>
                  </Link>
                  <Link href="#faq" passHref>
                      <NavText>FAQ</NavText>
                  </Link>
                  <Link href="/" passHref>
                      <NavSocial>
                          <BsDiscord/>
                      </NavSocial>
                  </Link>
                  <Link href="/" passHref>
                      <NavSocial>
                          <BsTwitter/>
                      </NavSocial>
                  </Link>
              </ItemsWrapper>
            </Navbar>
            <Section>
                <Hero>
                    <HeroTextWrapper>
                        <Title>Fresh Foxes</Title>
                        <Subtitle>We&apos;re releasing <SubtitleBold>3,333</SubtitleBold> hand-drawn foxes into the wild. Minting on the <SubtitleBold>Solana Blockchain</SubtitleBold> in <SubtitleBold>March</SubtitleBold>.</Subtitle>
                        <ButtonWrapper>
                            <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button abc>Join the Discord</Button>
                            </a>
                        </ButtonWrapper>
                    </HeroTextWrapper>
                    <HeroImageWrapper style={borderRadius}>
                        <Image src={heroImage} alt="" draggable="false"/>
                    </HeroImageWrapper>
                </Hero>
            </Section>
            <Spacer style={move}/>
            <About>
                <AboutImageWrapper>
                    <Image src={heroImage} alt="" draggable="false"/>
                </AboutImageWrapper>
                <AboutTextWrapper>
                    <MinorTitle>What is Fresh Foxes?</MinorTitle>
                    <Body>Fresh Foxes is a collection of 3,333 randomly generated NFTs on the Solana Blockchain. Because foxes are made up of 70+ traits, each fox is unique.</Body>
                </AboutTextWrapper>
            </About>
        </div>
    )
}
