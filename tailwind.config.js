/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5665",
        600: "#0B132A",
      },
      blue: {
        100: "#E9F5FF",
        200: "#D1EFFF",
        400: "#8BDDFF",
        500: "#2A52F5",
        600: "#2A3CD0",
        700: "#051C58",

      },
      yellow: {
        100: "#fae9b7",
        200: "#FFD755",
      },
      orange: {
        100: "#FFECEC",
        200: "#FFC8C8", // Add this line (choose your desired color)
        400: "#FFA555",
        500: "#F53855",
      },
      green: {
        200: "#FFA555",
        500: "#2FAB73",
      },
      white: {
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        100: "#F0F0F0",
        200: "#E7E7E7",
        300: "#E7E7E7",
        400: "#AFB5C0",
        500: "#DDDDDD",
        700: "#2A2A2A",
      },
      purple: {
        100: '#E6E6FA',
        400: '#6962BF',
      },
    },
    
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        // other colors...
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'manuale': ['Manuale', 'serif'],
      },
      fontSize: {
        // 'custom-lg': '22px',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
}

