import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import RoutesSection from "../components/RoutesSection";
import CompanyProfileSection from "../components/CompanyProfileSection";
import ContactInfo from "@/components/ContactInfo";
import BlogsSection from "../components/BlogsSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import BankingDetails from "@/components/BankingDetails";
import Footer from "@/components/Footer"; 
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div id="home"><HeroSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="routes"><RoutesSection /></div>
      <div id="company"><CompanyProfileSection /></div>
      <div id="banking"><BankingDetails /></div>
      <div id="blogs"><BlogsSection /></div>
      <div id="team"><TeamSection /></div>
      <div id="faq"><FAQSection /></div>
      
      <div id="contact"><ContactInfo /></div>
      <div id="contact-form">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
