import PodcastSection from './components/PodcastSection';
import CommunitySection from './components/CommunitySection';
import WebinarBanner from './components/WebinarBanner';
import TrendSection from './components/TrendSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <PodcastSection />
        <WebinarBanner />
        <TrendSection />
        <hr />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

export default App; 