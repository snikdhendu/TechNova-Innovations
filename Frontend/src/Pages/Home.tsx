import { Navbar } from "../Components/Navbar";
import { Hero, About, HowItWorks, Cta, Testimonials, Pricing, FAQ, Footer, ScrollToTop } from "../Components";
import { MarqueeDemo } from "@/Components/demo/MarqueeDemo";

const Home = () => {
  //For testing purposes projects are being printed on console; delete them later


  return (
    <div className=" p-0 ">
      <Navbar />
      <Hero />
      < MarqueeDemo />
      <About />
      <HowItWorks />
      <Cta />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
