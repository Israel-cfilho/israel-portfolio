
import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  return (
    <Particles
      id="particle-background"
      options={{
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 65,
            density: {
              enable: true,
            },
          },
          color: {
            value: ["#48D9FF", "#1677FF", "#8B5CF6"],
          },
          links: {
            enable: true,
            distance: 150,
            color: "#48D9FF",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            outModes: {
              default: "out",
            },
          },
          opacity: {
            value: 0.45,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 1,
              max: 2.5,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.35,
              },
            },
            push: {
              quantity: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
