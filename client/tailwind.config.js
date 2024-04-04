/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        nav: "0px 2px 5px 0px rgba(15, 23, 42, 0.18)",
      },
      colors: { accent: "#8635CC" },
    },
  },
  plugins: [],
};
