module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#0D0D0D', // Primary black
        white: '#F8F9FA', // Primary white
        gray: '#B5B7BC',  // Whisper Gray
        // Accent colors (use sparingly)
        lark: '#008CFF',  // Lark Blue (accent only)
        mint: '#2FF5C1'   // Neon Mint (accent only)
      }
    }
  },
  plugins: []
}; 