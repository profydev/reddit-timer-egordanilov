import React from 'react';
import Container from '../styles/Container.style';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <InfoSection />
    </Container>
  );
}
