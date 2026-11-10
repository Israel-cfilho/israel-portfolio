
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import ParticleBackground from "./components/effects/ParticleBackground";
import CursorGlow from "./components/effects/CursorGlow";
import Header from "./components/layout/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  const initializeParticles = async (
    engine: Parameters<typeof loadSlim>[0],
  ) => {
    await loadSlim(engine);
  };

  return (
    <ParticlesProvider init={initializeParticles}>
      <main className="app-shell">
        <ParticleBackground />
        <CursorGlow />

        <Header />

        <Hero />

        <About/>

        <Technologies/>

        <Projects/>

        <Contact/>

        <Footer/>
      </main>
    </ParticlesProvider>
  );
}

export default App;
