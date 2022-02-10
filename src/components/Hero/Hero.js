import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of this website is to showcase some of my skills as an aspiring and established developer. I am taking my development skills to the next level and build awesome projects.
        </SectionText>
        <Button onClick={() => window.location = '#about'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;