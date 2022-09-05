import Analytics from "./components/Analytics";
import { Cards } from "./components/Cards";
import ChitChat from "./components/ChitChat";
import Contact from "./components/Contact";
import FirstLastOddEven from "./components/FirstLastOddEven";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Socials />
      <Analytics />
      <Newsletter />
      <Cards />
      <Contact />
      {/* <ChitChat />
      <FirstLastOddEven /> */}
      <Footer />
    </div>
  );
}

export default App;
