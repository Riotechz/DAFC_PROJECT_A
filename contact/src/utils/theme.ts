import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
});

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        allVariants: {
            fontFamily: montserrat.style.fontFamily
        },
    },
});