export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4900C4", // blue-600
        secondary: "#0F172A", // slate-900
        accent: "#22C55E", // green-500
        muted: "#64748B", // slate-500
        danger: "#EF4444", // red-500
        background: "#F8FAFC", // gray-50
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
