import React from 'react';
import { DiAws, DiReact,  DiUnitySmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Skills = () =>  (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in my journey as a developer.
      I've been exposed to a wide range of languages but feel the most comfortable with JavaScript and C#.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud-Services</ListTitle>
          <ListParagraph>
            Certified in AWS<br />
            Solutions Architect Associate
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          < DiUnitySmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Game Engine</ListTitle>
          <ListParagraph>
            Experience with <br />
            Unity3D and Unreal Engine
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Skills;
