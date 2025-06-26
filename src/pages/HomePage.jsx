import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { BlogShowcase } from '../components/BlogShowcase';
import { CertificatesSection } from '../components/CertificatesSection';
import { ContactSection } from '../components/ContactSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation after the page loads
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsShowcase />
      <BlogShowcase />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}