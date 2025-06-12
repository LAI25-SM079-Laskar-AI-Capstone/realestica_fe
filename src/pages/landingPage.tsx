// import Navbar from "../shared/components/navbar";
import Hero from "../features/landing-page/components/hero";
import Feature from "../features/landing-page/components/feature";
import Carousel from "../features/landing-page/components/carousel";
import Visionary from "../features/landing-page/components/visionary";
import FeatureSelection from "../features/landing-page/components/featureSelection";
import Subscribe from "../features/landing-page/components/subscribe";
import FAQ from "../features/landing-page/components/faq";

const LandingPage = () => {
  return (
    <main className="min-h-screen flex flex-col ">
      <Hero />

      <Feature />

      <div className="max-w-6xl mx-auto w-full space-y-32 py-16 px-4 md:px-6 lg:px-8">
        <FeatureSelection />

        <Subscribe />

        <Carousel />

        <Visionary />

        <FAQ />
      </div>
    </main>
  );
};

export default LandingPage;
