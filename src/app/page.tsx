import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import { AboutSection } from "@/sections/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <AboutSection />
      <Testimonials />
      <FAQs />
      <Footer />
      {/* <h1 className="text-5xl">Le chef à domicile de votre remise en forme</h1> */}
    </>
  );
}
