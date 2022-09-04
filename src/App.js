import Analytics from "./components/Analytics";
import { Cards } from "./components/Cards";
import ChitChat from "./components/ChitChat";
import FirstLastOddEven from "./components/FirstLastOddEven";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      {/* <ChitChat />
      <FirstLastOddEven /> */}
      <Footer />
    </div>
  );
}

export default App;
