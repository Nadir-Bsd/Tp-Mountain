/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      ft: '452px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        primary: {
          orange: "hsl(35, 77%, 62%)",
          red: "hsl(5, 85%, 63%)",
        },
        neutral: {
          "off-white": "hsl(36, 100%, 99%)",
          "grayish-blue": "hsl(233, 8%, 79%)",
          "dark-grayish-blue": "hsl(236, 13%, 42%)",
          "very-dark-blue": "hsl(240, 100%, 5%)",
        }
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        paragraph: "20px",
      },
      
    },
  },
  plugins: [],
};