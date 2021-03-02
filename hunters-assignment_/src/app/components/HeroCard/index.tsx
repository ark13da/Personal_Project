import * as React  from 'react'
import styled from 'styled-components';
import * as Typography from "../../components/Typography"
import { useState } from 'react';

interface attributesDef { 
  strength: number;
  intelligence: number;
  stamina: number;
  healthpoints: number;
  mana: number;
  agility: number;
  speed: number;
  resistance: number;
  weakness: number;
}

interface skillsDef { 
  name: string;
  damage: string;
  element: string;
}

interface IHeroCardProps {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  attributes: attributesDef;
  skills: skillsDef;
}


const Card = styled.div`
    width:450px;
    margin:1rem;
    box-shadow: 0 0 1em rgba(68, 66, 63, 0.541);
    border-radius: 10px;
    padding: 15PX;
    background-color:#001147;
    box-sizing: border-box;
    height:650px;
    @media  (max-width: 1400px) {
      width:400px;
    }
    @media  (max-width: 1201px) {
      width:350px;
    }

    @media  (max-width: 1100px) {
      width:300px;
    }
    @media  (max-width: 576px) {
      width:100%;
    }
`;

const InfoHolder = styled.div`
    background-color:#5f369c;
    border-radius: 5px;
    padding: 5px;
    width:100%;
    height:100%;
    box-sizing: border-box; 
    position:relative;
`;


const CenterAlign = styled.div`
  text-align: center;
  color:#49bfcc;
`;


const HeroPic = styled.img`
    max-width:100%;
    height: auto;
    margin: auto;  
    border-radius: 2px;
`;

const MyLittleP = `
  color: #ffd11a;  
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.65px;
  line-height: 18px;
  font-family: "Montserrat";
    @media  (max-width: 1201px) {
      font-size: 10px;
    }
`;

const Flipper = styled.span`
    position: absolute;
    right: .2rem;
    bottom:0;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.65px;
    line-height: 32px;
    font-family: "Montserrat";
    padding:3px;
`;

const HeroSpecs = `
  background-color:#3a215f;
  border-radius:5px;
  padding:3px;
`;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  ${HeroSpecs}
  
`;

const GridElements = styled.div`
  ${MyLittleP}
  display:inline;
`;

const Story = styled.div`
  ${MyLittleP}  
  ${HeroSpecs}
  height:150px;
  border:1px solid #ffcc00;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    border-left: 1px solid #ffd11a;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffd11a; 
  }
  @media  (max-width: 1201px) {
      height:100px;
    }
  @media  (max-width: 576px) {
    height:120px;
  }
`;

const StoryHolder = styled.div`
  bottom:2rem;
  position:absolute;
  right:.2rem;
  padding:4px;
`;

console.log('>=---> Hi, hope you like what you see! I made changes to HeroIndex, Typography and HeroCard. T. Alireza Keshmiry <3 ')

export const HeroCard: React.FC<IHeroCardProps> = (props) => {
  const [flipState, setFlipState] = useState(false);
  let attrs: string[] = [];
  let skills: string[] = [];

  for (let i in props.attributes) { 
    if (i !== '__typename') {
      attrs.push(<GridElements key={i}>{ i+ ': '+ props.attributes[i]}</GridElements>);
    }
  };

  props.skills.forEach(el => { 
    for (let i in el) {
      if (i !== '__typename') {
        skills.push(<GridElements key={el.name+el[i]}>{i + ': '+ el[i]}</GridElements>);
      }
    }
  })

  

  return (
    <Card onClick={e => setFlipState(!flipState)}>
      {!flipState &&
        <InfoHolder>
        <CenterAlign>
          <Typography.HeadingThree>{props.name}</Typography.HeadingThree>
        </CenterAlign>
        <HeroPic src={props.imgUrl} />
        <Typography.Paragraph>{props.description}</Typography.Paragraph>
        <Flipper>Tap to Flip</Flipper>
      </InfoHolder>
      }
      {flipState &&
        <InfoHolder>
        <CenterAlign>
          <Typography.HeadingFourLight>{props.name}</Typography.HeadingFourLight>
        </CenterAlign>
        <Typography.HeadingFourLight>Attributes</Typography.HeadingFourLight>
        <GridContainer>
          {attrs}
        </GridContainer>
        <Typography.HeadingFourLight>Skills</Typography.HeadingFourLight>
        <GridContainer>
          {skills}
        </GridContainer>
        <StoryHolder>
          <Typography.HeadingFourLight>Back story</Typography.HeadingFourLight>
          <Story>{props.backStory}</Story>
        </StoryHolder>
        <Flipper>Tap to Flip</Flipper>
      </InfoHolder>
      }
    </Card>
  )
}
