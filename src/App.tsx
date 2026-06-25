import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { SplashCursor } from './components/SplashCursor';
import { NoiseOverlay } from './components/NoiseOverlay';
import { GridTexture } from './components/GridTexture';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen text-white select-none">
        {/* Global Visual System Layers */}
        <GridTexture />
        <NoiseOverlay />
        <CustomCursor />
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#55f766"
        />

        {/* Cinematic Section Choreography */}
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;
