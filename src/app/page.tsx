

import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import RoutesSection from "../components/RoutesSection";
import CompanyProfileSection from "../components/CompanyProfileSection";
import AccomplishmentsSection from "../components/AccomplishmentsSection";
import BlogsSection from "../components/BlogsSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div id="home"><HeroSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="routes"><RoutesSection /></div>
      <div id="company"><CompanyProfileSection /></div>
      <div id="accomplishments"><AccomplishmentsSection /></div>
      <div id="blogs"><BlogsSection /></div>
      <div id="team"><TeamSection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <footer className="py-8 text-center text-gray-500 text-sm bg-white border-t mt-12">
        &copy; {new Date().getFullYear()} SMOvers Logistics Services. All rights reserved.
      </footer>
    </div>
  );
}
