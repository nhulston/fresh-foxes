import {LogoWrapper, Navbar, ItemsWrapper, NavSocial, HideItemsOnSmall} from '../components/Navbar';
import {OpenAnimation} from "../components/OpenAnimation";
import {
    Title,
    NavText,
    Subtitle,
    SubtitleBold,
    MinorTitle,
    AboutTitle,
    AboutContent,
    RoadmapTitle,
    PhaseText,
    RoadmapText,
    LaunchDateTopText,
    LaunchDateBottomText,
    TeamMemberName,
    TeamMemberRole,
    TeamMemberBio,
    CopyrightText, FooterEmail
} from "../components/Text";
import {
    Button,
    ButtonWrapper,
    Hero,
    HeroImageWrapper,
    HeroTextWrapper, HeroWrapper,
    Spacer,
} from "../components/Hero";
import {BsDiscord, BsTwitter} from "react-icons/bs";
import Link from 'next/link';
import Image from "next/image";
import heroImage from "/public/gif.gif";
import {About, AboutImageWrapper, AboutTextWrapper, Item, Items} from "../components/About";
import {useEffect, useState} from "react";
import {Stars1, Stars2, Stars3, StarsRoadmap1, StarsRoadmap2, StarsRoadmap3} from "../components/Stars";
import {
    Roadmap,
    RoadmapImageWrapper,
    RoadmapItem1,
    RoadmapItem2,
    RoadmapItem3
} from "../components/Roadmap";
import phase1 from "/public/phase1.png";
import phase2 from "/public/phase2.png";
import phase3 from "/public/phase3.png";
import {LaunchDate} from "../components/LaunchDate";
import {Team, TeamImageWrapper, TeamLink, TeamLinkWrapper, TeamMember} from "../components/Team";
import nick from "/public/nick.png";
import brandon from "/public/brandon.png";
import {Footer, FooterHideOnSmallScreen, FooterIconsWrapper, FooterLinks} from "../components/Footer";

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

    const move = { transform: `scaleY(${2 + Math.sin(scrollPosition / 300)})` };
    const borderRadius = { borderRadius: `${scrollPosition / 1.5 + 15}px` };
    const borderRadius2 = { borderRadius: `${Math.max(15, 300 - scrollPosition / 2.5)}px` };

    const moveStars1 = { transform: `translateX(${scrollPosition / 3}px)`};
    const moveStars2 = { transform: `translateX(${scrollPosition / 5}px)`};
    const moveStars3 = { transform: `translateX(${scrollPosition / 7}px)`};

    return (
        <div>
            <OpenAnimation/>
            <Stars1/>
            <Stars2/>
            <Stars3/>
            <Navbar>
              <LogoWrapper>
                  <Link href="/">
                      <NavText>FRESH FOXES</NavText>
                  </Link>
              </LogoWrapper>
              <ItemsWrapper>
                  <Link href="/">
                      <NavText>HOME</NavText>
                  </Link>
                  <HideItemsOnSmall>
                      <Link href="#about">
                          <NavText>ABOUT</NavText>
                      </Link>
                      <Link href="#roadmap">
                          <NavText>ROADMAP</NavText>
                      </Link>
                      <Link href="#team">
                          <NavText>TEAM</NavText>
                      </Link>
                  </HideItemsOnSmall>
                  <NavSocial>
                      <a
                          href="https://discord.gg/SMc6qS7zxX"
                          target="_blank"
                          rel="noopener noreferrer">
                          <BsDiscord/>
                      </a>
                  </NavSocial>
                  <NavSocial>
                      <a
                          href="https://twitter.com/FreshFoxes"
                          target="_blank"
                          rel="noopener noreferrer">
                          <BsTwitter/>
                      </a>
                  </NavSocial>
              </ItemsWrapper>
            </Navbar>
            <HeroWrapper>
                <Hero>
                    <HeroTextWrapper>
                        <Title>Fresh Foxes</Title>
                        <Subtitle>We&apos;re releasing <SubtitleBold>5,555</SubtitleBold> hand-drawn foxes into the wild. Minting on the <SubtitleBold>Solana Blockchain</SubtitleBold>.</Subtitle>
                        <ButtonWrapper>
                            <a
                                href="https://discord.gg/SMc6qS7zxX"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button abc>JOIN THE DISCORD</Button>
                            </a>
                        </ButtonWrapper>
                    </HeroTextWrapper>
                    <HeroImageWrapper style={borderRadius}>
                        <Image src={heroImage} alt="" draggable="false"/>
                    </HeroImageWrapper>
                </Hero>
            </HeroWrapper>
            <Spacer style={move}/>
            <About id="about">
                <AboutImageWrapper style={borderRadius2}>
                    <Image src={heroImage} alt="" draggable="false"/>
                </AboutImageWrapper>
                <AboutTextWrapper>
                    <MinorTitle>ABOUT FRESH FOXES</MinorTitle>
                    <Items>
                        <Item>
                            <AboutTitle>Mint Date</AboutTitle>
                            <AboutContent>Early March</AboutContent>
                        </Item>
                        <Item>
                            <AboutTitle>Total Supply</AboutTitle>
                            <AboutContent>5,555</AboutContent>
                        </Item>
                        <Item>
                            <AboutTitle>Possible Combinations</AboutTitle>
                            <AboutContent>648,960</AboutContent>
                        </Item>
                        <Item>
                            <AboutTitle>Mint Price</AboutTitle>
                            <AboutContent>0.199 SOL</AboutContent>
                        </Item>
                    </Items>
                </AboutTextWrapper>
            </About>
            <Roadmap id="roadmap">
                <StarsRoadmap1 style={moveStars1}/>
                <StarsRoadmap2 style={moveStars2}/>
                <StarsRoadmap3 style={moveStars3}/>
                <RoadmapItem1>
                    <RoadmapImageWrapper>
                        <Image src={phase1} alt="" draggable="false"/>
                    </RoadmapImageWrapper>
                    <PhaseText>PHASE 1</PhaseText>
                    <RoadmapTitle>A NEW BEGINNING</RoadmapTitle>
                    <RoadmapText>
                        Project inception<br/>
                        A strong community grows<br/>
                        The OGs are whitelisted
                    </RoadmapText>
                </RoadmapItem1>
                <RoadmapItem2>
                    <RoadmapImageWrapper>
                        <Image src={phase2} alt="" draggable="false"/>
                    </RoadmapImageWrapper>
                    <PhaseText>PHASE 2</PhaseText>
                    <RoadmapTitle>THE FOXES LAUNCH</RoadmapTitle>
                    <RoadmapText>
                        The first drop<br/>
                        A DAO is constructed<br/>
                        The community drives our vision
                    </RoadmapText>
                </RoadmapItem2>
                <RoadmapItem3>
                    <RoadmapImageWrapper>
                        <Image src={phase3} alt="" draggable="false"/>
                    </RoadmapImageWrapper>
                    <PhaseText>PHASE 3</PhaseText>
                    <RoadmapTitle>A FOX&apos;S FRIEND</RoadmapTitle>
                    <RoadmapText>
                        The second drop<br/>
                        Holders whitelisted and airdropped<br/>
                        The holders are rewarded
                    </RoadmapText>
                </RoadmapItem3>
            </Roadmap>
            <LaunchDate>
                <LaunchDateTopText>RELEASE DATE</LaunchDateTopText>
                <LaunchDateBottomText>EARLY MARCH 2022</LaunchDateBottomText>
            </LaunchDate>
            <Team id="team">
                <TeamMember>
                    <TeamImageWrapper>
                        <Image src={nick} alt="" draggable="false"/>
                    </TeamImageWrapper>
                    <TeamMemberName>NICHOLAS</TeamMemberName>
                    <TeamMemberRole>ARTIST AND DEVELOPER</TeamMemberRole>
                    <TeamMemberBio>A blockchain developer, designer, and digital artist with several years of experience.</TeamMemberBio>
                    {/*<TeamLinkWrapper>
                        <TeamLink>
                            <BsLinkedin/>
                        </TeamLink>
                    </TeamLinkWrapper>*/}
                </TeamMember>
                <TeamMember>
                    <TeamImageWrapper>
                        <Image src={brandon} alt="" draggable="false"/>
                    </TeamImageWrapper>
                    <TeamMemberName>BRANDON</TeamMemberName>
                    <TeamMemberRole>MARKETING AND COMMUNTIY GROWTH</TeamMemberRole>
                    <TeamMemberBio>A blockchain developer, designer, and digital artist with several years of experience.</TeamMemberBio>
                    {/*<TeamLinkWrapper>
                        <TeamLink>
                            <BsLinkedin/>
                        </TeamLink>
                    </TeamLinkWrapper>*/}
                </TeamMember>
            </Team>
            <Footer>
                <CopyrightText>© 2022 Fresh Foxes</CopyrightText>
                <FooterLinks>
                    <FooterHideOnSmallScreen>
                        <FooterIconsWrapper>
                            <NavSocial>
                                <a
                                    href="https://discord.gg/SMc6qS7zxX"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <BsDiscord/>
                                </a>
                            </NavSocial>
                            <NavSocial>
                                <a
                                    href="https://twitter.com/FreshFoxes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <BsTwitter/>
                                </a>
                            </NavSocial>
                        </FooterIconsWrapper>
                    </FooterHideOnSmallScreen>
                    <FooterEmail href="mailto:contact@freshfoxes.io">contact@freshfoxes.io</FooterEmail>
                </FooterLinks>
            </Footer>
        </div>
    )
}
