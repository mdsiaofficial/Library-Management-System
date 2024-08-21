/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      sm2: "720px",
      md: "768px",
      md2: "900px",
      lg: "984px",
      lg2: "1080px",
      xl: "1280px",
      xl2: "1440px",
      xl3: "1600px",
      xl4: "1750px",
      xl5: "1920px",
    },

    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
      custom: "0px 0px 16px -5px rgba(59,96,201,0.91)",
    },

    extend: {
      colors: {
        "bg-pri": "#EEF0F4",
        "bg-sec": "#1b1818",
        "text-pri": "#1c120e",
        "text-sec": "#807f7c",
        "pri": "#d64a12",
        "sec": "#d6b600",
        "box-shad": "#383838 0px 7px 30px 0px",
      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
};
