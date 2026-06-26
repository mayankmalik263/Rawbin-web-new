/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nc-bgreen': '#45B900',
        'nc-dgreen': '#1F5A3F',
        'nc-blue': '#273266',
        'nc-purple': '#5433FF',
        'nc-text': '#002A12',
        'bg-alt': '#E3E4E8',
        'fg-alt': '#17181C',
        'bs1': '#FFFFFF',
        'bs2': '#C1C2C5',
        'body-bg': '#F9F5F3',
        'rb-coffee-brown': '#5C4943',
        'rb-forest-green': '#4F574A',
        'rb-rose-gold': '#DAD5CF',
        'nc-box-grad': '#C8E8BF',
        primary: '#45B900',
        'bg-main': '#FFFFFF',
        'bg-secondary': '#F9F5F3',
        'text-muted': '#666666',
        // Accent color expansion — Brown & Lilac
        'accent-brown':      '#5C4033',   // warm chocolate brown — borders, badges, earthy highlights
        'accent-brown-soft': '#8B6355',   // lighter brown — hover states, subtle backgrounds
        'accent-lilac':      '#A68BBF',   // medium lilac — decorative accents, section badges
        'accent-lilac-soft': '#C8B4D6',   // pale lilac — icon tints, tag borders
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
