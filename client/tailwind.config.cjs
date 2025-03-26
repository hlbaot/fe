/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Cấu hình quét file
  theme: {
    extend: {
      fontFamily: {
        script: ["Dancing Script", "cursive"], 
      },
    },
  },
  plugins: [],
};
