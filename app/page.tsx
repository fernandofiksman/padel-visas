import { AboutVanessa } from "../components/AboutVanessa";
import { Contact } from "../components/Contact";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { VisaIntro } from "../components/VisaIntro";
import { WhoWeHelp } from "../components/WhoWeHelp";
import { WhyPadel } from "../components/WhyPadel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#14251C]">
      <Header />
      <main>
        <Hero />
        <WhoWeHelp />
        <VisaIntro />
        <WhyPadel />
        <AboutVanessa />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
