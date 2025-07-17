import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import AIEngine from './components/sections/AIEngine';
import TokenUtility from './components/sections/TokenUtility';
import Tokenomics from './components/sections/Tokenomics';
import RevenueStreams from './components/sections/RevenueStreams';
import Security from './components/sections/Security';
import Compliance from './components/sections/Compliance';
import Adoption from './components/sections/Adoption';
import TeamMetrics from './components/sections/TeamMetrics';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <AIEngine />
        <TokenUtility />
        <Tokenomics />
        <RevenueStreams />
        <Security />
        <Compliance />
        <Adoption />
        <TeamMetrics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
