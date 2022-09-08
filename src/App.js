import { createContext, useContext, useEffect } from "react";
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
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes.light);

function App() {
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    if (theme == 'dark') {
        document.body.classList.add('dark');
    }
}, [theme])

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
