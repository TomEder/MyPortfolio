/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "tommy-text": "#0B3482",
        "tommy-icons": "rgb(249, 219, 189)",
        "tommy-third": "rgb(249, 219, 189)",
        "tommy-fourth": "rgb(249, 219, 189)",
        "tommy-background": "#F2F2F2",
        "button-background": "#9AACB8",
        "tommy-lower-bg": "#cbd5e1",
        "button-color": "#64748b",
        "button-hover": "#475569",
      },
    },
  },
  plugins: [],
};
