/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-gray-200)",
        foreground: "var(--color-gray-400)",
      },
      borderRadius: {
        'custom': '80px',
        'custom_phone': '50px',
      },
    },
  },
  plugins: [],
};
