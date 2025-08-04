import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import FeaturesOverview from '../components/sections/FeaturesOverview';
import Benefits from '../components/sections/Benefits';
import Testimonials from '../components/sections/Testimonials';
import TrustIndicators from '../components/sections/TrustIndicators';
import ShippingForm from '../components/sections/ShippingForm';
import ProblemSolution from '../components/sections/ProblemSolution';

const Home = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <FeaturesOverview />
      <Benefits />
      <Testimonials />
      <TrustIndicators />
      <ShippingForm />
      <ProblemSolution />
    </main>
  );
};

export default Home;
