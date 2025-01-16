/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  // darkMode: ['class'],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-50": "#F5F3FE",
        "primary-100": "#EDE8FD",
        "primary-200": "#DACEFA",
        "primary-300": "#C4B1F7",
        "primary-400": "#AC8DF5",
        "primary-500": "#8037F1",
        // "primary-500": "green",
        "primary-600": "#7A34E6",
        "primary-700": "#6D2FCE",
        "primary-800": "#5F29B2",
        "primary-900": "#4D2191",
        "primary-950": "#371767",
        "gray-50": "#F9F9F9",
        "gray-100": "#F5F5F5",
        "gray-200": "#EAEAEA",
        "gray-300": "#DFDFDF",
        "gray-400": "#D3D3D3",
        "gray-500": "#C0C0C0",
        "gray-600": "#B7B7B7",
        "gray-700": "#A4A4A4",
        "gray-800": "#8E8E8E",
        "gray-900": "#747474",
        "gray-950": "#525252",

        "secondary-50": "#FCF1D9",
        "secondary-100": "#F9E1AE",
        "secondary-200": "#F7D080",
        "secondary-300": "#F4C25A",
        "secondary-400": "#F1B434",
        "secondary-500": "#EEA101",
        "secondary-600": "#BE8101",
        "secondary-700": "#9B6901",
        "secondary-800": "#775100",
        "secondary-900": "#533800",
        "secondary-950": "#241800",

        "success-50": "#F2F8F2",
        "success-100": "#E7F3E7",
        "success-200": "#CBE6CD",
        "success-300": "#ACD9AF",
        "success-400": "#85CB8A",
        "success-500": "#09B32B",
        "success-600": "#09AB29",
        "success-700": "#089925",
        "success-800": "#078420",
        "success-900": "#056C1A",
        "success-950": "#044C12",

        "warning-50": "#FEF7F2",
        "warning-100": "#FCF1E7",
        "warning-200": "#FAE2CB",
        "warning-300": "#F7D2AC",
        "warning-400": "#F4C185",
        "warning-500": "#F0A400",
        "warning-600": "#E59C00",
        "warning-700": "#CD8C00",
        "warning-800": "#B17900",
        "warning-900": "#916300",
        "warning-950": "#664600",

        "danger-50": "##FEF3F2",
        "danger-100": "#FCE8E7",
        "danger-200": "#FACFCB",
        "danger-300": "#F7B2AC",
        "danger-400": "#F48F85",
        "danger-500": "#F03D00",
        "danger-600": "#E53A00",
        "danger-700": "#CD3400",
        "danger-800": "#B12D00",
        "danger-900": "#912500",
        "danger-950": "#661A00",

       
        "error-50": "#FEECE9",
        "error-500": "#F53D24",

        white: "#FFFFFF",
        dark: "#0F081A",
        focus: "#0E97E5",

        'base': "#525252",

        "box-shadow": "0px 0px 4px 0px rgba(0, 0, 0, 15%)",
      },
      screens: {
        xs: "480px",
      },
      width: {
        10: "10%",
        15: "15%",
        20: "20%",
        25: "25%",
        30: "30%",
        35: "35%",
        40: "40%",
        45: "45%",
        50: "50%",
        55: "55%",
        60: "60%",
        65: "65%",
        70: "70%",
        75: "75%",
        80: "80%",
        85: "85%",
        90: "90%",
        95: "95%",
        100: "100%",
        420: "420px",
        465: "465px",
        680: "680px",
        content: "1248px",

        "height-footer": "459px",
        filter_icon:
          "invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)",
      },
      height: {
        header: "126px",
      },
      fontWeight: {
        extrabold: '800',
        '400':'400',
        '500':'500',
        '800':'800',
      },
      fontFamily: {
        inter: [ "sans-serif",'Inter'],
        greatvibes: ["Great Vibes", 'Inter',"cursive"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'bg-change': {
          '0%, 100%': { backgroundColor: 'rgb(34, 197, 94)' }, // Green
          '50%': { backgroundColor: '#dbe4dc' },      // Red
        },
      },
      backgroundImage: {
        'custom-repeating-gradient': `repeating-linear-gradient(45deg, #EEA101, #8037F1 33px, transparent 0, transparent 41px, #EEA101 0, #f6f27b 74px, transparent 0, transparent 82px)`,
      },
      backgroundPosition: {
        // 'custom-x': '-30px',
      },
      backgroundSize: {
        'custom-size': '116px 3px',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'bg-change': 'bg-change 2s linear infinite',
      },
    },
  },
  plugins: [],
});
