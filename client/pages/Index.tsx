import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import FAQSection from "@/pages/FAQSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <SEOHead
        title="Web Development & Design Agency in Delhi | TRM Consultancy Services"
        description="Award-winning web development agency in Delhi offering custom website design, e-commerce solutions, WordPress development, and mobile app services. 50+ projects delivered to happy clients across India."
        keywords="web development Delhi, website design company India, custom web development, e-commerce website development, responsive web design, web developer India, digital agency Delhi"
        ogImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop"
      />
      <div className="bg-white">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
