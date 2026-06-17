import { useState } from "react";
import { ThemeProvider } from "./theme";
import { LangProvider } from "./i18n";
import { useSmoothScroll } from "./lib/motion";
import { Loader } from "./components/Loader";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function App() {
  const [ready, setReady] = useState(false);
  const [reveal, setReveal] = useState(false);
  useSmoothScroll(ready);

  return (
    <ThemeProvider>
      <LangProvider>
        <Loader onReady={() => setReady(true)} onReveal={() => setReveal(true)} />
        <Nav />
        <main>
          <Hero play={reveal} />
          <Marquee />
          <About />
          <Work />
          <Experience />
          <Education />
          <Contact />
        </main>
      </LangProvider>
    </ThemeProvider>
  );
}
