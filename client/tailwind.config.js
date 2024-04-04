/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        nav: "0px 2px 5px 0px rgba(15, 23, 42, 0.18)",
        ring: "0px 0px 0px 1px rgba(9, 30, 66, 0.08), 0px 4px 8px -6px rgba(9, 30, 66, 0.25)",
        "ring-accent":
          "0px 0px 0px 1px rgba(133, 53, 204, 0.2),0px 4px 8px -6px rgba(133, 53, 204, 0.25)",
      },
      colors: { accent: "#8635CC", "accent-light": "#9352CC" },
    },
  },
  plugins: [],
};
