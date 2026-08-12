import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "stage-black": "var(--color-stage-black)",
        "stage-surface": "var(--color-stage-surface)",
        "stage-elevated": "var(--color-stage-elevated)",
        "programme-ivory": "var(--color-programme-ivory)",
        "programme-white": "var(--color-programme-white)",
        ink: "var(--color-ink)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        wine: "var(--color-wine)",
        "wine-bright": "var(--color-wine-bright)",
        "muted-gold": "var(--color-muted-gold)",
        "line-dark": "var(--color-line-dark)",
        "line-light": "var(--color-line-light)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-small)",
        DEFAULT: "var(--radius-card)",
        full: "var(--radius-pill)"
      },
      maxWidth: {
        content: "var(--content-max)",
        reading: "var(--reading-max)"
      },
      transitionTimingFunction: {
        enter: "var(--ease-enter)",
        exit: "var(--ease-exit)",
        scene: "var(--ease-scene)"
      }
    }
  },
  plugins: []
};

export default config;
