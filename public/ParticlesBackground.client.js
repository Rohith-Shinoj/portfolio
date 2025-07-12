import { tsParticles } from "tsparticles";

export function initParticles() {
  tsParticles.load("tsparticles", {
    background: {
      color: "transparent"
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2563eb", "#94a3b8", "#e2e8f0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.1,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      links: {
        enable: true,
        distance: 150,
        color: "#2563eb",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
        bounce: false
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initParticles);
  } else {
    initParticles();
  }
} 