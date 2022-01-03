import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/FourthSection/FourthSection";
import FifthSection from "./components/FifthSection/FifthSection";
import SixthSection from "./components/SixthSection/SixthSection";
import SeventhSection from "./components/SeventhSection/SeventhSection";
import EighthSection from "./components/EighthSection/EighthSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="no-navbar-content">
        <div className="new-section">
          <Hero />
        </div>
        <div className="new-section">
          <SecondSection />
        </div>
        <div className="new-section">
          <ThirdSection />
        </div>
        <div className="new-section">
          <FourthSection />
        </div>
        <div className="new-section">
          <FifthSection />
        </div>
        <div className="new-section">
          <SixthSection />
        </div>
        <div className="new-section">
          <SeventhSection />
        </div>
        <div className="new-section">
          <EighthSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
