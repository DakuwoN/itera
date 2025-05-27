// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        colors: {
            'dodger-blue': '#21c6fa',
            'cornflower-blue': '#4f60f6',
            'firefly': '#040b10',
            'black-pearl': '#061834',
            'downriver': '#0a2c55',
            'blue-whale': '#042c41',
            'atoll': '#075871',
            'meteorite': '#2c1c71',
            'blue-chill': '#0d8c94',
            'cinder': '#140f1a',
        }
    },
};
export const plugins = [];
