import {LogoWrapper, Navbar, ItemsWrapper, NavSocial} from '../components/Navbar';
import {OpenAnimation} from "../components/OpenAnimation";
import {
    Title,
    NavText,
    Subtitle,
    SubtitleBold,
    MinorTitle,
    ItemTitle,
    ItemContent,
    RoadmapTitle,
    PhaseText,
    RoadmapText,
    LaunchDateTopText,
    LaunchDateBottomText,
    TeamMemberName,
    TeamMemberRole,
    TeamMemberBio
} from "../components/Text";
import {Section} from "../components/Section";
import {
    Button,
    ButtonWrapper,
    Hero,
    HeroImageWrapper,
    HeroTextWrapper,
    Spacer,
} from "../components/Hero";
import {BsDiscord, BsTwitter, BsLinkedin} from "react-icons/bs";
import Link from 'next/link';
import Image from "next/image";
import heroImage from "/public/gif.gif";
import {About, AboutImageWrapper, AboutTextWrapper, Item, Items} from "../components/About";
import {useEffect, useState} from "react";
import {Stars1, Stars2, Stars3, StarsRoadmap1, StarsRoadmap2, StarsRoadmap3} from "../components/Stars";
import {Roadmap, RoadmapImageWrapper, RoadmapItem} from "../components/Roadmap";
import phase1 from "/public/phase1.png";
import phase2 from "/public/phase2.png";
import phase3 from "/public/phase3.png";
import {LaunchDate} from "../components/LaunchDate";
import {Team, TeamImageWrapper, TeamLink, TeamLinkWrapper, TeamMember} from "../components/Team";
import nick from "/public/nick.png";
import brandon from "/public/brandon.png";

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
                  <Link href="/" passHref>
                      <NavText>FRESH FOXES</NavText>
                  </Link>
              </LogoWrapper>
              <ItemsWrapper>
                  <Link href="/" passHref>
                      <NavText>HOME</NavText>
                  </Link>
                  <Link href="#about" passHref>
                      <NavText>ABOUT</NavText>
                  </Link>
                  <Link href="#roadmap" passHref>
                      <NavText>ROADMAP</NavText>
                  </Link>
                  <Link href="#team" passHref>
                      <NavText>TEAM</NavText>
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
                        <Subtitle>We&apos;re releasing <SubtitleBold>5,555</SubtitleBold> hand-drawn foxes into the wild. Minting on the <SubtitleBold>Solana Blockchain</SubtitleBold> in <SubtitleBold>March</SubtitleBold>.</Subtitle>
                        <ButtonWrapper>
                            <a
                                href="https://discord.com"
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
            </Section>
            <Spacer style={move}/>
            <About id="about">
                <AboutImageWrapper style={borderRadius2}>
                    <Image src={heroImage} alt="" draggable="false"/>
                </AboutImageWrapper>
                <AboutTextWrapper>
                    <MinorTitle>ABOUT FRESH FOXES</MinorTitle>
                    <Items>
                        <Item>
                            <ItemTitle>Mint Date</ItemTitle>
                            <ItemContent>Early March</ItemContent>
                        </Item>
                        <Item>
                            <ItemTitle>Total Supply</ItemTitle>
                            <ItemContent>5,555</ItemContent>
                        </Item>
                        <Item>
                            <ItemTitle>Possible Combinations</ItemTitle>
                            <ItemContent>648,960</ItemContent>
                        </Item>
                        <Item>
                            <ItemTitle>Mint Price</ItemTitle>
                            <ItemContent>0.149 SOL</ItemContent>
                        </Item>
                    </Items>
                </AboutTextWrapper>
            </About>
            <Roadmap id="roadmap">
                <StarsRoadmap1 style={moveStars1}/>
                <StarsRoadmap2 style={moveStars2}/>
                <StarsRoadmap3 style={moveStars3}/>
                <RoadmapItem>
                    <RoadmapImageWrapper>
                        <Image src={phase1} alt="" draggable="false"/>
                    </RoadmapImageWrapper>
                    <PhaseText>PHASE 1</PhaseText>
                    <RoadmapTitle>A NEW BEGINNING</RoadmapTitle>
                    <RoadmapText>
                        Project inception<br/>
                        A strong community grows<br/>
                        The OGs are rewarded
                    </RoadmapText>
                </RoadmapItem>
                <RoadmapItem>
                    <RoadmapImageWrapper>
                        <Image src={phase2} alt="" draggable="false"/>
                    </RoadmapImageWrapper>
                    <PhaseText>PHASE 2</PhaseText>
                    <RoadmapTitle>THE FOXES LAUNCH</RoadmapTitle>
                    <RoadmapText>
                        The first drop<br/>
                        A DAO is constructed<br/>
                        The holders are rewarded
                    </RoadmapText>
                </RoadmapItem>
                <RoadmapItem>
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
                </RoadmapItem>
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
                    <TeamMemberName>NICK HULSTON</TeamMemberName>
                    <TeamMemberRole>ARTIST AND DEVELOPER</TeamMemberRole>
                    <TeamMemberBio>A blockchain developer, designer, and digital artist with several years of experience.</TeamMemberBio>
                    <TeamLinkWrapper>
                        <TeamLink>
                            <BsLinkedin/>
                        </TeamLink>
                    </TeamLinkWrapper>
                </TeamMember>
                <TeamMember>
                    <TeamImageWrapper>
                        <Image src={brandon} alt="" draggable="false"/>
                    </TeamImageWrapper>
                    <TeamMemberName>BRANDON LEE</TeamMemberName>
                    <TeamMemberRole>MARKETING AND COMMUNTIY GROWTH</TeamMemberRole>
                    <TeamMemberBio>A blockchain developer, designer, and digital artist with several years of experience.</TeamMemberBio>
                    <TeamLinkWrapper>
                        <TeamLink>
                            <BsLinkedin/>
                        </TeamLink>
                    </TeamLinkWrapper>
                </TeamMember>
            </Team>
        </div>
    )
}
